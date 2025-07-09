document.addEventListener('DOMContentLoaded', () => {
    const chatWidget = document.getElementById('chat-widget');
    const chatToggleButton = document.getElementById('chat-toggle-button');
    const chatCloseButton = document.getElementById('chat-close-button');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSendButton = document.getElementById('chat-send-button');

    let chatHistory = [];

    chatToggleButton.addEventListener('click', () => {
        chatWidget.classList.toggle('chat-widget-hidden');
        chatToggleButton.classList.toggle('chat-widget-hidden');
    });

     chatInput.addEventListener('input', () => {
        chatInput.style.height = 'auto';
        chatInput.style.height = `${chatInput.scrollHeight}px`;
    });

    chatCloseButton.addEventListener('click', () => {
        chatWidget.classList.add('chat-widget-hidden');
        chatToggleButton.classList.remove('chat-widget-hidden');
    });

    chatSendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    async function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText === '') return;

        addMessage(messageText, 'user-message');
        chatInput.value = '';

        chatHistory.push({ role: 'user', text: messageText });

        const aiMessageElement = addMessage('', 'ai-message');
        const typingIndicator = document.createElement('span');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.innerHTML = '<span>.</span><span>.</span><span>.</span>';
        aiMessageElement.querySelector('p').appendChild(typingIndicator);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    message: messageText,
                    history: chatHistory.slice(0, -1) 
                }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let aiResponseText = '';

            aiMessageElement.querySelector('p').removeChild(typingIndicator);

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                aiResponseText += chunk;
                aiMessageElement.querySelector('p').textContent = aiResponseText;
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            chatHistory.push({ role: 'model', text: aiResponseText });

        } catch (error) {
            console.error('Error fetching AI response:', error);
            aiMessageElement.querySelector('p').textContent = 'The connection to the archives has been severed. Please try again later.';
        }
    }

    function addMessage(text, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', className);
        
        const p = document.createElement('p');
        p.textContent = text;
        messageElement.appendChild(p);
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return messageElement;
    }
});