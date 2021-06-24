import React, { useState } from 'react';
import Chat from './Components/Chat';

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
      <h2 className='title'>Simple Chat</h2>
      {!user && (
        <>
          <form onSubmit={register} className='register'>
            <label
              htmlFor=''
              className='screen-reader-only'
              aria-label='Write your name'
            >
              Name:
            </label>
            <input
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <button className='btn btn-login'>Enter</button>
          </form>
        </>
      )}
      {user && <Chat name={name} />}
    </div>
  );
}

export default App;
