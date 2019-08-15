'use strict';

const net = require('net');
const PORT = process.env.PORT || 3001;
const client = new net.Socket();

client.connect(PORT, 'localhost', () => {
  console.log('up on port',PORT);
});

client.on('data', function(data) {
  console.log('Data');
  let payload = JSON.parse(data);
  console.log(payload);
});

client.on('save', function(data) {
  console.log('save');
  let payload = JSON.parse(data);
  console.log(payload);
});

client.on('error', function(data) {
  console.log('error');
  let payload = JSON.parse(data);
  console.log(payload);
});

client.on('close', function() {
  console.log('Connection Closed');
});