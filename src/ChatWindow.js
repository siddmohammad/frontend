import React from 'react';

const ChatWindow = ({ messages }) => {
  return (
    <div style={styles.chatWindow}>
      {messages.map((msg, index) => (
        <div key={index} style={styles.message}>
          {msg}
        </div>
      ))}
    </div>
  );
};

const styles = {
  chatWindow: {
    border: '1px solid #ccc',
    height: '300px',
    padding: '10px',
    overflowY: 'scroll',
    backgroundColor: '#f9f9f9'
  },
  message: {
    margin: '10px 0',
    padding: '5px 10px',
    backgroundColor: '#e1f5fe',
    borderRadius: '10px'
  }
};

export default ChatWindow;
