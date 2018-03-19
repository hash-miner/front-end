'use strict';

const socket = io('http://localhost:4000');

let sendMessageForm = document.getElementById('spike_form');
let messageInput = document.getElementById('spike_input');

sendMessageForm.addEventListener('submit', event => {
  event.preventDefault();
  let message = messageInput.value;
  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:3000/spike', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({hello: message}));
  // superagent.post(process.env.GATE).send({hello: message});
});

socket.on('UPDATE_CHAIN', (data) => {
  console.log('CHAIN UPDATE FROM BACKEND 2', data);
});