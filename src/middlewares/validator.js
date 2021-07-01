'use strict';

module.exports = (req, res, next) => {
  if (req.body.name && req.body.price) {
    next();
 
  } else {
    next('Invalid req data');
  }
};