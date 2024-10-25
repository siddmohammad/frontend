import React from 'react';

const SendButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      Send
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default SendButton;
