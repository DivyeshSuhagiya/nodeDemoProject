const express = require("express");
const router = express.Router();

const userController = require("../controller/userController")

router.get('/get-mongoose' , (req,res) => userController.user.get(req,res));

router.post('/post-mongoose' , (req,res) => userController.user.post(req,res));

router.post('/put-mongoose' , (req,res) => userController.user.put(req,res));

router.delete('/delete-mongoose' , (req,res) => userController.user.delete(req,res));

router.get('/getById-mongoose' , (req,res) => studentController.student.getById(req,res));

router.post('/login' , (req,res) => userController.user.login(req,res));

router.post('/register' , (req,res) => userController.user.register(req,res));

router.post('/activateAccount' , (req,res) => userController.user.activateAccount(req,res));

router.post('/forgetPassword' , (req,res) => userController.user.forgetPassword(req,res));

router.post('/verifyOtpCode' , (req,res) => userController.user.verifyOtpCode(req,res));

router.post('/changePassword' , (req,res) => userController.user.changePassword(req,res));



module.exports = router