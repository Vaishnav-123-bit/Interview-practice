const socket = io('http://localhost:8000');
const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector('.container');


const name = prompt("nam dal")
socket.io("new-user-joined",name)
