const express = require("express");
const router = express.Router();

const studentController = require("../controller/studentCotroller")

router.get('/get-mongoose' , (req,res) => studentController.student.get(req,res));

router.post('/post-mongoose' , (req,res) => studentController.student.post(req,res));

router.post('/put-mongoose' , (req,res) => studentController.student.put(req,res));

router.delete('/delete-mongoose' , (req,res) => studentController.student.delete(req,res));

router.get('/getById-mongoose' , (req,res) => studentController.student.getById(req,res));

module.exports = router