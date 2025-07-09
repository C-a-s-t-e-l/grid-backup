// File: generate-embeddings.js
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// --- Configuration ---
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; // Using the SERVICE KEY for write access
const googleApiKey = process.env.GOOGLE_API_KEY1;

if (!supabaseUrl || !supabaseServiceKey || !googleApiKey) {
    console.error("Missing required environment variables. Make sure SUPABASE_URL, SUPABASE_SERVICE_KEY, and GOOGLE_API_KEY1 are set.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const genAI = new GoogleGenerativeAI(googleApiKey);
const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

async function generateAndStoreEmbeddings() {
    console.log("Starting embedding generation process...");

    // Fetch stories that are approved but don't have an embedding yet
    const { data: stories, error } = await supabase
        .from('stories')
        .select('id, title, full_story')
        .eq('is_approved', true)
        .is('embedding', null);

    if (error) {
        console.error("Error fetching stories:", error.message);
        return;
    }

    if (stories.length === 0) {
        console.log("No new stories to embed. All approved entries are up to date.");
        return;
    }

    console.log(`Found ${stories.length} stories to process.`);

    for (const story of stories) {
        try {
            // Combining title and story gives the AI better context for creating the embedding
            const contentToEmbed = `Title: ${story.title}\n\n${story.full_story}`;
            
            console.log(`\nGenerating embedding for story ID: ${story.id} ("${story.title}")...`);
            
            const result = await model.embedContent(contentToEmbed);
            const embedding = result.embedding.values;

            const { error: updateError } = await supabase
                .from('stories')
                .update({ embedding: embedding })
                .eq('id', story.id);

            if (updateError) {
                console.error(`Failed to update story ID ${story.id}:`, updateError.message);
            } else {
                console.log(`Successfully stored embedding for story ID: ${story.id}.`);
            }
            // A delay to be kind to the API and avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 1100));

        } catch (e) {
            console.error(`An error occurred while processing story ID ${story.id}:`, e.message);
        }
    }

    console.log("\nEmbedding generation process finished.");
}

generateAndStoreEmbeddings();