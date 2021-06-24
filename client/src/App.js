import React, { useState } from 'react';
import Chat from './Components/Chat';
import { BsChatDotsFill } from 'react-icons/bs';

import './App.css';

function App() {
  const [name, setName] = useState('');
  const [user, setUser] = useState(false);

  const register = (e) => {
    e.preventDefault();
    if (name !== '') {
      setUser(true);
    }
  };

  return (
    <div className='App'>
      <header className='title'>
        <BsChatDotsFill /> Simple Chat
      </header>
      {!user && (
        <form onSubmit={register} className='register'>
          <label
            htmlFor=''
            className='screen-reader-only'
            aria-label='Write your name'
          >
            Name:
          </label>
          <input
            placeholder='Your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='btn btn-login'>Enter</button>
        </form>
      )}
      {user && <Chat name={name} />}
    </div>
  );
}

export default App;
