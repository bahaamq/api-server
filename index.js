'use strict';
require('dotenv').config();
const server = require('./src/server');
require('dotenv').config()

const pool = require('./src/queries');
const PORT = process.env.PORT || 3000;

pool
  .connect()
  .then(() => {
    server.start(PORT);
  })
  .catch((e) => {
    console.error('CONNECTION ERROR', e.message);
  });
