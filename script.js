document.getElementById('chat-button').addEventListener('click', function() {
    document.getElementById('chat-box').classList.toggle('hidden');
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-box').classList.add('hidden');
});

document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        var input = document.getElementById('chat-input');
        var message = input.value.trim();
        if (message) {
            var chatContent = document.getElementById('chat-content');
            var messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatContent.appendChild(messageElement);
            input.value = '';
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    }
});
