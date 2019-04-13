const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('Hey You Rock!')
})

module.exports = server;