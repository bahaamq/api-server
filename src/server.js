'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

// const validator = require('./middlewares/validator')
const app = express();
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/food');
const logger=require('./middlewares/logger')
//Middlewares will be called before each http req
app.use(express.json())
app.use(logger)

//External Routees with initial starting. /food
app.use('/food', foodRouter);
app.use('/clothes', clothesRouter);



  app.get('/bad',(req,res)=>{
    throw new Error('Error');
  })
  app.get('/',(req,res)=>{
    res.json({name:'test'})
  })


  app.use('*',notFoundHandler);
app.use(errorHandler)

module.exports = {
    server:app,
    start:(port)=>{
      app.listen(port,()=>console.log(`Listening on ${port}`))
    }
  }