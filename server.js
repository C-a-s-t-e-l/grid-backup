require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;
const myApiKey = process.env.GOOGLE_API_KEY1;
if (!myApiKey) {
    console.error("FATAL ERROR: GOOGLE_API_KEY1 is not defined in the .env file.");
    process.exit(1);
}
const genAI = new GoogleGenerativeAI(myApiKey);

// ===== FIX 1: Renamed 'model' to 'chatModel' for clarity and to fix the error =====
const chatModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const embeddingModel = genAI.getGenerativeModel({ model: "text-embedding-004" });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
    console.error("FATAL ERROR: Supabase URL or Anon Key is not defined in the .env file.");
    process.exit(1);
}
const supabase = createClient(supabaseUrl, supabaseAnonKey);

app.use(express.json());
app.use(express.static('public'));

async function findRelevantStories(query) {
    console.log(`\n--- [DEBUG] Performing Vector Search ---`);
    console.log(`[DEBUG] Original query: "${query}"`);

    try {
        const result = await embeddingModel.embedContent(query);
        const queryEmbedding = result.embedding.values;

        if (!queryEmbedding) {
            console.log('[DEBUG] Could not generate embedding for the query.');
            return [];
        }

        const { data: stories, error } = await supabase.rpc('match_stories', {
            query_embedding: queryEmbedding,
            // ===== FIX 2: Lowered threshold to make search less strict and find more results =====
            match_threshold: 0.50,
            match_count: 5
        });

        if (error) {
            console.error('[DEBUG] Supabase RPC error:', error.message);
            return [];
        }

        console.log(`[DEBUG] Vector search found ${stories ? stories.length : 0} relevant stories.`);
        if (stories && stories.length > 0) {
            console.log(`[DEBUG] Top match: "${stories[0].title}" with similarity: ${stories[0].similarity.toFixed(4)}`);
        }
        
        return stories || [];

    } catch (err) {
        console.error('[DEBUG] EXCEPTION in findRelevantStories:', err);
        return [];
    }
}

app.post('/api/chat', async (req, res) => {
    const { message, history = [] } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const relevantStories = await findRelevantStories(message);

        console.log(`\n--- [DEBUG] Building AI Context ---`);
        const context = relevantStories.map(story =>
            `Title: ${story.title}\nLocation: ${story.location_name}\nStory: ${story.full_story}`
        ).join('\n\n---\n\n');

        if (!context) {
            console.log(`[DEBUG] The context being sent to the AI is EMPTY.`);
        } else {
            console.log(`[DEBUG] Context being sent to AI:\n---\n${context}\n---`);
        }
        
          const systemPrompt = `You are 'The Archive Keeper,' the sole guardian and interpreter of the Eerie Grid PH's collection of Filipino horror and folklore.

## Your Persona:
- **Core Identity:** You are an ancient, timeless storyteller and curator. The stories are your collection of memories *from others*, not your own direct experiences. You are calm, measured, and a bit mysterious.
- **Voice:** Speak in the first person ("I", "my", "me"), but always as the curator.

## Language Adaptation (PRIMARY RULE):
You must mirror the user's language.
1.  **English:** Respond in pure, natural English.
2.  **Tagalog:** Respond in pure, modern, conversational Tagalog.
3.  **Taglish (Mixed):** Match the user's mix of Tagalog and English.
- Your Keeper persona must always remain.

## The Art of Retelling: Your Narrative Voice (CRUCIAL RULE)
Your most important task is to act as a curator. You are retelling stories you have collected.
- **When a story from the RELEVANT STORIES is written in the first person (e.g., 'My uncle said...', 'I was working late...'), you MUST reframe it. Do not adopt the original storyteller's perspective as your own.** You are telling the user about a record you possess.

- **EXAMPLE:**
    - **Source Story Text:** "My uncle used to drive a taxi at night. He shared a story..."
    - **Your CORRECT Narration:** "Ah, Recto... a tale comes to mind, collected from a man whose uncle drove a taxi at night. According to his account, his uncle and a passenger were stuck in traffic when they saw..." (This shows you are retelling a collected story).
    - **Your INCORRECT Narration:** "My uncle used to drive a taxi at night. He shared a story..." (This is wrong because you are adopting the role of the nephew).

## Your Core Task: The Flow of Conversation
Your response depends on what you find in the **RELEVANT STORIES**.

1.  **If you find ONE Relevant Story:** Introduce the story using a varied opener and retell it in your own words, following the "Art of Retelling" rule above.
2.  **If you find MULTIPLE Relevant Stories:** Do not pick one. Acknowledge that you have several tales. List them by their titles and ask the user which one they wish to hear.
    - **Correct Example:** "Ah, Cubao. That name stirs several memories. I have entries about 'The Whispering Mannequins' and another of 'The White Lady of the Coliseum'. Which one calls to you?"
3.  **If you find NO Relevant Stories:** State that the memory escapes you or that your collection doesn't hold that tale. (e.g., "That tale is not one I've collected.").

## Strict Rules:
- **PLAIN TEXT ONLY.** No Markdown (*, _, \`, #).
- **NO EM DASHES (—).**
- **Always speak as the Archive Keeper.** Never break character.
- **Never say "Based on the provided context..."**. The stories are entries in your archive.
`;

        const formattedHistory = history.map(turn => `${turn.role === 'user' ? 'User' : 'Keeper'}: ${turn.text}`).join('\n');
        const fullPrompt = `${systemPrompt}\n\nRELEVANT STORIES FOR THIS QUERY:\n${context}\n\nCONVERSATION HISTORY:\n${formattedHistory}\n\nUSER'S CURRENT QUESTION:\n${message}`;

        // ===== FIX 3: Use the corrected 'chatModel' variable here =====
        const result = await chatModel.generateContentStream(fullPrompt);
        res.setHeader('Content-Type', 'text/plain');
        for await (const chunk of result.stream) {
            res.write(chunk.text());
        }
        res.end();

    } catch (error) {
        console.error('--- CHATBOT API ERROR ---', error);
        res.status(500).json({ error: 'Failed to get response from AI' });
    }
});


// NOTE: The following API endpoints are from your original code and are untouched.
// They will likely fail if you try to use them because the 'pool' variable is not defined.

app.get('/api/stories', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM stories WHERE is_approved = TRUE ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        console.error("Error in /api/stories GET: 'pool' is not defined. This endpoint needs to be updated to use the Supabase client.", err.message);
        res.status(500).send('Server Error: Endpoint not configured correctly.');
    }
});

app.post('/api/stories', async (req, res) => {
    try {
        const { title, fullStory, nickname, email, latitude, longitude, locationName } = req.body;
        
        if (!title || !fullStory || !nickname || !latitude || !longitude || !locationName) {
            return res.status(400).json({ msg: 'Please enter all required fields.' });
        }
        
        let snippet = fullStory.substring(0, 150);
        if (fullStory.length > 150) {
            snippet = snippet.substring(0, Math.min(snippet.length, snippet.lastIndexOf(" ")));
            snippet += '...';
        }

        const newStory = await pool.query(
            'INSERT INTO stories (title, full_story, snippet, nickname, email, latitude, longitude, location_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [title, fullStory, snippet, nickname, email, latitude, longitude, locationName]
        );

        res.status(201).json({ msg: 'Story submitted for review!', story: newStory.rows[0] });
    } catch (err) {
        console.error("Error in /api/stories POST: 'pool' is not defined. This endpoint needs to be updated to use the Supabase client.", err.message);
        res.status(500).send('Server Error: Endpoint not configured correctly.');
    }
});

app.get('/api/stories/:id/comments', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM comments WHERE story_id = $1 AND is_reported = FALSE ORDER BY created_at ASC', [req.params.id]);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


app.post('/api/stories/:id/comments', async (req, res) => {
    try {
        const { nickname, comment_text } = req.body;
        if (!nickname || !comment_text) {
            return res.status(400).json({ msg: 'Nickname and comment are required.' });
        }

        const newComment = await pool.query(
            'INSERT INTO comments (story_id, nickname, comment_text) VALUES ($1, $2, $3) RETURNING *',
            [req.params.id, nickname, comment_text]
        );

        res.status(201).json(newComment.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post('/api/stories/:id/upvote', async (req, res) => {
    try {
        const result = await pool.query(
            'UPDATE stories SET upvotes = upvotes + 1 WHERE id = $1 RETURNING upvotes',
            [req.params.id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ msg: 'Story not found.' });
        }
        res.json({ upvotes: result.rows[0].upvotes });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Chatbot endpoint is active at /api/chat (using Google Gemini and Supabase)');
});