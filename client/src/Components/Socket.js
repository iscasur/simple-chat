import io from 'socket.io-client';

let socket = io('https://simple-chat-moons.herokuapp.com/:5000');

export default socket;
