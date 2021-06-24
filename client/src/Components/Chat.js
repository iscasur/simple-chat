import React, { useState, useEffect, useRef } from 'react';
import socket from './Socket';

import './Chat.css';

const Chat = ({ name }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('connected', name);
  }, [name]);

  useEffect(() => {
    socket.on('messages', (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const submit = (e) => {
    e.preventDefault();
    socket.emit('message', name, message);
    setMessage('');
  };

  return (
    <div>
      <div className='chat'>
        {messages.map((e, i) => (
          <div key={i}>
            <div>{e.name}</div>
            <div>{e.message}</div>
          </div>
        ))}
        <div ref={divRef}></div>
      </div>
      <form onSubmit={submit}>
        <label htmlFor=''>Message</label>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
