const express = require("express");
const helmet = require("helmet");
//const db = require('./data/db-config.js');


const carRouter = require('../cars/cars-router')

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carRouter)


module.exports = server;