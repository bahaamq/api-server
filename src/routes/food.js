//Cashed since it's required before in other files
const express = require('express');

const Food = require('../models/food');
const Interface = require('../models/interface');
const validator = require('../middlewares/validator');
const router = express.Router();
const food = new Interface(Food);


router.post('/', validator, Makefood);

router.get('/', getFood);

router.get('/:id', getFood);


router.put('/:id', validator, updatefood);

router.delete('/:id', deletefood);

async function  getFood(req, res) {
  const resObj = await food.read(req.params.id);
  res.json(resObj);
}
async function Makefood(req, res) {
  const resObj =await food.create(req.body);
  res.status(201).json(resObj);
}
async function updatefood(req, res) {
  const resObj =await food.update(req.params.id, req.body);
  console.log(resObj)
  res.json(resObj);
}
async function deletefood(req, res) {
  const resObj =await food.delete(req.params.id);
  res.json(resObj);
}
module.exports = router;