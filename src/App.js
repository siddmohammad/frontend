import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div style={styles.container}>
      <h1>Chat App</h1>
      <ChatWindow messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#fff',
  }
};

export default App;
