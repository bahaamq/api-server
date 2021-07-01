//Cashed since it's required before in other files
const express = require('express');

const Clothes = require('../models/clothes');
const Interface = require('../models/interface');

const validator = require('../middlewares/validator');
const router = express.Router();
const clothes = new Interface(Clothes);


router.post('/', validator, addclothes);

router.get('/', getclothes);

router.get('/:id', getclothes);


router.put('/:id', validator, updateclothes);

router.delete('/:id', deleteclothes);

async function getclothes(req, res) {
  const resObj =await clothes.read(req.params.id);
  res.status(201).json(resObj);
}
async function addclothes(req, res) {
  const resObj =await clothes.create(req.body);
  res.json(resObj);
}
async function updateclothes(req, res) {
  const resObj =await clothes.update(req.params.id, req.body);
  console.log(resObj)
  res.json(resObj);
}
async function deleteclothes(req, res) {
  const resObj =await clothes.delete(req.params.id);
  res.json(resObj);
}
module.exports = router;