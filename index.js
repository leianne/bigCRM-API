const express = require('express');
const server = require('./api/server');
require('dotenv').config();
const port = process.env.PORT || 3000;

server.listen(port, () => console.log("Hey I\'m Working! " + port))