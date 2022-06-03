const express = require("express");
const router = express.Router();

const productController = require("../controller/productController")

router.get('/get-mongoose' , (req,res) => productController.product.get(req,res));

router.post('/post-mongoose' , (req,res) => productController.product.post(req,res));

router.post('/put-mongoose' , (req,res) => productController.product.put(req,res));

// router.delete('/delete-mongoose' , (req,res) => productController.product.delete(req,res));

// router.get('/getById-mongoose' , (req,res) => productController.product.getById(req,res));

module.exports = router