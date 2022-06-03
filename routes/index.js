const express = require("express");

const router = express.Router();

const studentRoutes = require('./student');
const userRoutes = require('./user');
const productRoutes = require('./product');

router.use('/student' , studentRoutes);
router.use('/user' , userRoutes);
router.use('/product' , productRoutes);

module.exports = router