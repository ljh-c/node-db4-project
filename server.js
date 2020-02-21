const express = require('express');
const server = express();
const recipesRouter = require('./recipes/recipes-router');

server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
  res.send('<h1>Data Modeling</h1>');
});

module.exports = server;