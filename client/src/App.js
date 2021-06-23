import './App.css';
import socket from './Components/Socket';

function App() {
  socket.emit('connected', 'Hello from client!');

  return <div className='App'></div>;
}

export default App;
