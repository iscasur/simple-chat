import io from 'socket.io-client';

let socket = io('https://simple-chat-moons.herokuapp.com/');

export default socket;
