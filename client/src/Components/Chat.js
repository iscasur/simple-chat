import React, { useState, useEffect, useRef } from 'react';
import socket from './Socket';

const Chat = (name) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('connected', name);
  }, [name]);

  const submit = (e) => {
    e.preventDefault();
    socket.emit('message', name, message);
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor=''>Message</label>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>Send</button>
    </form>
  );
};

export default Chat;
