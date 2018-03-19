'use strict';

const express = require('express');
const app = express();
const server = require('http').createServer(app);
require('dotenv').config();
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/'));

server.listen(process.env.PORT, () => console.log('Listening On Port:', process.env.PORT));  
