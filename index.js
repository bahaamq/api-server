'use strict';
require('dotenv').config();
const server = require('./src/server');
require('dotenv').config()

const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    server.start(PORT);
  })
  .catch((e) => {
    console.error('CONNECTION ERROR', e.message);
  });