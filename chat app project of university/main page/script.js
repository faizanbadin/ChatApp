// JavaScript code to handle user list, chat messages, and sending messages

// Sample user data (replace with actual user data)
const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    // ... more users
  ];
  
  // Function to populate the user list
  function populateUserList() {
    const userList = document.querySelector('.user-list');
    userList.innerHTML = '';
  
    users.forEach(user => {
      const userItem = document.createElement('li');
      userItem.textContent    = user.name;   
      userItem.addEventListener('click', () => {
        // Handle user selection and open chat window
        openChat(user);
      });
      userList.appendChild(userItem);
    });
  }
  
  // Function to open a chat with a specific user
  function openChat(user) {
    const chatHeader = document.querySelector('.chat-header');
    chatHeader.textContent = user.name;
  
    // Clear previous chat messages
    const chatMessages = document.querySelector('.chat-messages');
    chatMessages.innerHTML = '';
  
    // Fetch and display chat messages for the user
    // ... (Implement logic to fetch messages from server or database)
  
    // Handle sending messages
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
  
    sendBtn.addEventListener('click',    () => {
      const message = chatInput.value;
      if (message) {
        // Send the message to the server
        // ... (Implement logic to send the message)
  
        // Add the message to the chat window
        const messageElement = document.createElement('div');
        messageElement.textContent = `You: ${message}`;
        chatMessages.appendChild(messageElement);   
  
        chatInput.value = '';
      }
    });
  }
  
  // Initialize the chat app
  populateUserList();
  // Open a default chat or wait for user selection
  