const express = require('express');
const server = express();
const userRoutes = require('../config/users/usersRoutes');

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hey You Rock!')
})
server.use('/api/users', userRoutes);

module.exports = server;