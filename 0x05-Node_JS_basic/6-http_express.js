#!/usr/bin/node
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton Scheool!');
});

app.litsen(port, () => {
});

module.exports = app;
