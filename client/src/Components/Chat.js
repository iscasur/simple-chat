import React, { useState, useEffect, useRef } from 'react';
import socket from './Socket';
import { FaTelegramPlane } from 'react-icons/fa';

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
          <div className='chat__item' key={i}>
            <div className='username'>{e.name}</div>
            <div className='message'>{e.message}</div>
          </div>
        ))}
        <div ref={divRef}></div>
      </div>
      <form onSubmit={submit} className='chatbox'>
        <label
          htmlFor=''
          className='screen-reader-only'
          aria-label='Write your message'
        >
          Message
        </label>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='btn btn-chat'>
          <FaTelegramPlane />
        </button>
      </form>
    </div>
  );
};

export default Chat;
