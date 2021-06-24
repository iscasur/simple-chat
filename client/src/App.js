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
      {!user && (
        <form onSubmit={register}>
          <label htmlFor=''>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button>Enter</button>
        </form>
      )}
      {user && <Chat name={name} />}
    </div>
  );
}

export default App;
