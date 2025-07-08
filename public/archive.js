document.addEventListener('DOMContentLoaded', () => {

    let fullStoryList = [];
    let currentFilteredList = [];
    let currentPage = 1;
    const storiesPerPage = 9;

    const storyListContainer = document.getElementById('story-list-container');
    const paginationContainer = document.getElementById('pagination-container');
    const modal = document.getElementById('story-modal');
    const modalTitle = document.getElementById('modal-story-title');
    const modalLocation = document.getElementById('modal-story-location');
    const modalAuthor = document.getElementById('modal-story-author');
    const modalFullStory = document.getElementById('modal-full-story');
    const closeButtonTop = document.getElementById('modal-close-button-top');
    const closeButtonBottom = document.getElementById('modal-close-button-bottom');
    const viewOnGridButton = document.getElementById('modal-view-on-grid');
    const searchBar = document.getElementById('story-search-bar');
    const sortSelect = document.getElementById('sort-stories');

    function formatDate(dateString) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    const date = new Date(dateString);

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate.replace(' at', ' -').replace(/(AM|PM)/g, (match) => match.toLowerCase());
}

async function initializeStories() {
    try {
        // This is the NEW code.
        const { data, error } = await supabaseClient
            .from('stories')
            .select('*')
            .eq('is_approved', true)
            .order('created_at', { ascending: false }); 

        if (error) {
            throw error;
        }

        fullStoryList = data; 
        handleSortAndFilter();

    } catch (error) {
        console.error('Failed to fetch stories for archive:', error.message);
        const storyListContainer = document.getElementById('story-list-container');
        if (storyListContainer) {
            storyListContainer.innerHTML = '<p class="no-results">Failed to load the archive. The spirits are not responding...</p>';
        }
    }
}
    
    function renderStories(storiesToRender, page = 1) {
        if (!storyListContainer) return;
        storyListContainer.innerHTML = '';

        if (storiesToRender.length === 0) {
            storyListContainer.innerHTML = '<p class="no-results">No stories found. The spirits are quiet...</p>';
            return;
        }

        const startIndex = (page - 1) * storiesPerPage;
        const endIndex = startIndex + storiesPerPage;
        const paginatedItems = storiesToRender.slice(startIndex, endIndex);

        paginatedItems.forEach(story => {
            const formattedDate = formatDate(story.created_at); 
const caseTag = `Archive #${String(story.id).padStart(4, '0')} - ${formattedDate}`;

const storyCard = `
    <div class="story-card" data-story-id="${story.id}">
        <p class="story-card-casetag">${caseTag}</p>
        <div class="story-card-content">
       
            <p class="story-card-location"><i class="fas fa-map-pin"></i>${story.location_name}</p>
            <h3 class="story-card-title">${story.title}</h3>
          
            <p class="story-card-author">By: ${story.nickname || 'Unknown'}</p>
            
            <p class="story-card-snippet">${story.snippet}</p>
           
        </div>
       <div class="story-card-actions">
                        <button class="eerie-button primary btn-read" data-story-id="${story.id}">
                            <i class="fas fa-book-open"></i> Read Full Story
                        </button>
                    </div>
    </div>
`;
            storyListContainer.innerHTML += storyCard;
        });
    }
// Add these new functions to both client.js and archive.js

async function fetchAndDisplayComments(storyId) {
    const commentsContainer = document.getElementById('comments-container');
    if (!commentsContainer) return;

    commentsContainer.innerHTML = '<p>Loading echoes...</p>';

    try {
        const { data, error } = await supabaseClient
            .from('comments')
            .select('*')
            .eq('story_id', storyId)
            .order('created_at', { ascending: true });

        if (error) throw error;

        if (data.length === 0) {
            commentsContainer.innerHTML = '<p>No echoes yet. Be the first to leave a whisper.</p>';
        } else {
            commentsContainer.innerHTML = data.map(comment => {
                const commentDate = new Date(comment.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
                return `
                    <div class="comment-card">
                        <p class="comment-text">${escapeHTML(comment.comment_text)}</p>
                        <p class="comment-meta">By <span class="comment-author">${escapeHTML(comment.nickname)}</span> on <span class="comment-date">${commentDate}</span></p>
                    </div>
                `;
            }).join('');
        }
    } catch (err) {
        commentsContainer.innerHTML = '<p>Could not load the echoes from the beyond.</p>';
        console.error('Error fetching comments:', err.message);
    }
}

function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (match) {
        return {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"',
            "'": "'"
        }[match];
    });
}

const commentForm = document.getElementById('comment-form');
if (commentForm) {
    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitButton = commentForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';

        const storyId = document.getElementById('comment-story-id').value;
        const nickname = document.getElementById('comment-nickname').value;
        const commentText = document.getElementById('comment-text').value;
        
        // Save nickname to localStorage for future use
        localStorage.setItem('eerieGridNickname', nickname);

        try {
            const { data, error } = await supabaseClient
                .from('comments')
                .insert([
                    { story_id: storyId, nickname: nickname, comment_text: commentText }
                ]);

            if (error) throw error;
            
            // Clear the form and refresh the comments
            document.getElementById('comment-text').value = '';
            fetchAndDisplayComments(storyId);

        } catch (err) {
            alert('Could not submit comment. The spirits are restless.');
            console.error('Error submitting comment:', err.message);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Comment';
        }
    });
}

    function setupPagination(items) {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = "";
        
        const pageCount = Math.ceil(items.length / storiesPerPage);
        if (pageCount <= 1) return;

        const prevButton = document.createElement('button');
        prevButton.innerHTML = '«';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                handlePageChange();
            }
        });
        paginationContainer.appendChild(prevButton);

        const maxVisibleButtons = 7;
        if (pageCount <= maxVisibleButtons) {
            for (let i = 1; i <= pageCount; i++) {
                paginationContainer.appendChild(createPageButton(i));
            }
        } else {
            paginationContainer.appendChild(createPageButton(1));
            
            if (currentPage > 4) {
                paginationContainer.appendChild(createEllipsis());
            }

            let start = Math.max(2, currentPage - 1);
            let end = Math.min(pageCount - 1, currentPage + 1);

            if(currentPage <= 4) {
                start = 2;
                end = 5;
            }
            if(currentPage >= pageCount - 3) {
                start = pageCount - 4;
                end = pageCount - 1;
            }
            
            for (let i = start; i <= end; i++) {
                paginationContainer.appendChild(createPageButton(i));
            }

            if (currentPage < pageCount - 3) {
                paginationContainer.appendChild(createEllipsis());
            }

            paginationContainer.appendChild(createPageButton(pageCount));
        }

        const nextButton = document.createElement('button');
        nextButton.innerHTML = '»';
        nextButton.disabled = currentPage === pageCount;
        nextButton.addEventListener('click', () => {
            if (currentPage < pageCount) {
                currentPage++;
                handlePageChange();
            }
        });
        paginationContainer.appendChild(nextButton);
    }

    function createPageButton(page) {
        let button = document.createElement('button');
        button.innerText = page;
        if (currentPage == page) button.classList.add('active');
        button.addEventListener('click', function () {
            currentPage = page;
            handlePageChange();
        });
        return button;
    }

    function createEllipsis() {
        const ellipsis = document.createElement('span');
        ellipsis.innerText = '...';
        ellipsis.style.padding = '8px';
        return ellipsis;
    }

    function handlePageChange() {
        renderStories(currentFilteredList, currentPage);
        setupPagination(currentFilteredList);
        window.scrollTo(0, 0); 
    }

    function populateModal(storyId) {
    const storyData = fullStoryList.find(s => s.id == storyId);
     const commentStoryIdInput = document.getElementById('comment-story-id');
    if(commentStoryIdInput) {
        commentStoryIdInput.value = storyId;
    }

    // Pre-fill the nickname from localStorage
    const commentNicknameInput = document.getElementById('comment-nickname');
    if(commentNicknameInput){
        commentNicknameInput.value = localStorage.getItem('eerieGridNickname') || '';
    }
    if (!storyData) return;

    modalTitle.textContent = storyData.title;
    // Change storyData.locationName to storyData.location_name
    modalLocation.innerHTML = `<em><i class="fas fa-map-pin"></i> ${storyData.location_name}</em>`;
    // Change storyData.authorNickname to storyData.nickname
    modalAuthor.innerHTML = `<em><i class="fas fa-user-ghost"></i> By: ${storyData.nickname || 'Unknown'}</em>`;
    // Change storyData.fullStory to storyData.full_story
    modalFullStory.innerHTML = `<p>${storyData.full_story.replace(/\n/g, '</p><p>')}</p>`;

    viewOnGridButton.dataset.storyId = storyData.id;

      setupReactionSystem(storyId);

    // Add event listeners to the reaction buttons
    const reactionButtons = document.querySelectorAll('.reaction-button');
    reactionButtons.forEach(button => {
        // We clone and replace to remove any old listeners from previous modal openings
        const newButton = button.cloneNode(true);
        newButton.addEventListener('click', (event) => handleReactionClick(event, storyId));
        button.parentNode.replaceChild(newButton, button);
    });
    fetchAndDisplayComments(storyId);
    openModal();
}


    
    function openModal() {
        modal.classList.remove('modal-hidden');
        modal.classList.add('modal-visible');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('modal-hidden');
        modal.classList.remove('modal-visible');
        document.body.style.overflow = '';
    }

   function handleSortAndFilter() {
    let filteredStories = [...fullStoryList];
    const searchTerm = searchBar.value.toLowerCase();
    
    if (searchTerm) {
        filteredStories = filteredStories.filter(story => 
            story.title.toLowerCase().includes(searchTerm) ||
            // Change story.authorNickname to story.nickname
            (story.nickname && story.nickname.toLowerCase().includes(searchTerm)) ||
            // Change story.locationName to story.location_name
            story.location_name.toLowerCase().includes(searchTerm) ||
            story.snippet.toLowerCase().includes(searchTerm)
        );
    }

    const sortBy = sortSelect.value;
    if (sortBy === 'newest') {
        filteredStories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortBy === 'oldest') {
        filteredStories.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else if (sortBy === 'title-az') {
        filteredStories.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    currentFilteredList = filteredStories;
    currentPage = 1;
    renderStories(currentFilteredList, currentPage);
    setupPagination(currentFilteredList);
}

    if (storyListContainer) {
        storyListContainer.addEventListener('click', (e) => {
            const readButton = e.target.closest('.btn-read');
            if (readButton) {
                populateModal(readButton.dataset.storyId);
            }
        });
    }

    if (viewOnGridButton) {
        viewOnGridButton.addEventListener('click', (e) => {
            const storyId = e.currentTarget.dataset.storyId;
            window.location.href = `map.html?story=${storyId}`;
        });
    }

    if (closeButtonTop && closeButtonBottom && modal) {
        [closeButtonTop, closeButtonBottom].forEach(btn => btn.addEventListener('click', closeModal));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('modal-visible')) {
                closeModal();
            }
        });
    }
    function getOrCreateUserId() {
    let userId = localStorage.getItem('eerieGridUserId');
    if (!userId) {
        // A simple way to generate a UUID in modern browsers
        userId = self.crypto.randomUUID();
        localStorage.setItem('eerieGridUserId', userId);
    }
    return userId;
}

// 2. Function to display the reaction counts on the UI
function displayReactionCounts(counts) {
    const displayContainer = document.getElementById('reaction-display');
    if (!displayContainer) return;

    const emojiMap = {
        spooked: '😱',
        intriguing: '🤔',
        tragic: '😥',
        believable: '🧐',
        absurd: '😂'
    };

    if (!counts || counts.length === 0) {
        displayContainer.innerHTML = '';
        return;
    }

    displayContainer.innerHTML = counts.map(item =>
        `<span class="reaction-count">${emojiMap[item.reaction_type] || '?'} ${item.reaction_count}</span>`
    ).join('');
}

// 3. Function to update the visual state of the reaction buttons
function updateReactionButtons(userReaction) {
    const buttons = document.querySelectorAll('.reaction-button');
    buttons.forEach(button => {
        if (button.dataset.reaction === userReaction) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

// 4. Main handler to set up the entire reaction system for a story
async function setupReactionSystem(storyId) {
    const userId = getOrCreateUserId();
    
    // --- Fetch initial counts and the user's current reaction ---
    try {
        // Use Promise.all to fetch both pieces of data simultaneously
        const [countsResult, userReactionResult] = await Promise.all([
            // Fetch the total counts for each reaction type
            supabaseClient.rpc('get_reaction_counts', { story_id_to_check: storyId }),
            // Fetch the specific reaction of the current user for this story
            supabaseClient.from('reactions').select('reaction_type').eq('story_id', storyId).eq('user_id', userId).maybeSingle()
        ]);

        if (countsResult.error) throw countsResult.error;
        if (userReactionResult.error) throw userReactionResult.error;

        // Display the fetched counts
        displayReactionCounts(countsResult.data);
        
        // Update the button styles based on the user's reaction
        const userReaction = userReactionResult.data ? userReactionResult.data.reaction_type : null;
        updateReactionButtons(userReaction);

    } catch (err) {
        console.error("Error setting up reactions:", err.message);
        const displayContainer = document.getElementById('reaction-display');
        if (displayContainer) displayContainer.innerHTML = '<span class="reaction-count">?</span>';
    }
}

// 5. Click handler for the reaction buttons
async function handleReactionClick(event, storyId) {
    const button = event.currentTarget;
    const reactionType = button.dataset.reaction;
    const userId = getOrCreateUserId();

    const isAlreadySelected = button.classList.contains('selected');

    if (isAlreadySelected) {
        // --- User is un-reacting ---
        try {
            const { error } = await supabaseClient
                .from('reactions')
                .delete()
                .eq('story_id', storyId)
                .eq('user_id', userId);
            
            if (error) throw error;
            // Refresh the whole system to get new counts
            await setupReactionSystem(storyId);
        } catch (err) {
            console.error("Error deleting reaction:", err.message);
        }
    } else {
        // --- User is adding or changing a reaction ---
        try {
            const { error } = await supabaseClient
                .from('reactions')
                .upsert({
                    story_id: storyId,
                    user_id: userId,
                    reaction_type: reactionType
                }, { onConflict: 'story_id, user_id' }); // 'upsert' will INSERT or UPDATE as needed

            if (error) throw error;
            // Refresh the whole system to get new counts and update selection
            await setupReactionSystem(storyId);
        } catch (err) {
            console.error("Error upserting reaction:", err.message);
        }
    }
}

    
    if (searchBar) searchBar.addEventListener('input', handleSortAndFilter);
    if (sortSelect) sortSelect.addEventListener('change', handleSortAndFilter);

    initializeStories();
});