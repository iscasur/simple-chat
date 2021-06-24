import React, { useState } from 'react';
import './App.css';
import socket from './Components/Socket';

function App() {
  const [name, setName] = useState('');
  const [user, setUser] = useState(false);

  const register = (e) => {
    e.prevenDefault();
    if (name !== '') {
      setUser(true);
    }
  };

  return (
    <div className='App'>
      <form onSubmit={register}>
        <label htmlFor=''>Name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Enter</button>
      </form>
    </div>
  );
}

export default App;
