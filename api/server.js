const express = require('express');
const server = express();
const userRoutes = require('../config/users/usersRoutes');
const customerRoutes = require('../config/customers/customersRoutes');

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hey You Rock!')
})
server.use('/api/users', userRoutes);
server.use('/api/customers', customerRoutes);


module.exports = server;