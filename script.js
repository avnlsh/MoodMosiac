const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    // Display the user's message
    const messages = document.getElementById('messages');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    messages.appendChild(userMessage);

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Send the message to the server and get the response
    const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.textContent = data.reply;
    messages.appendChild(botMessage);

    // Scroll to the bottom of the messages
    messages.scrollTop = messages.scrollHeight;
}
