const mongoose = require('mongoose');
const { successResponse, badRequestResponse, errorResponse } = require('../middleware/response');
const STUDENT = mongoose.model('students')

exports.student = {
    get: async (req, res) => {
        try {
            const students = await STUDENT.find({})
            res.json({
                isSuccess: true,
                data: students
            })
        } catch (error) {
            res.json({
                isSuccess: false,
                data: error
            })
        }
    },
    post: async (req, res) => {
        try {
            const student = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                hobbies: req.body.hobbies,
                gender: req.body.gender,
                city: req.body.city,
            }
            const isCreated = await STUDENT.create(student);
            if (isCreated) {
                return successResponse(res, {
                    message: 'Student created successfully',
                })
            }
            else {
                return badRequestResponse(res, {
                    message: 'Failed to create student',
                })
            }
        } catch (error) {
            errorResponse(error, req, res)
        }
    },
    put: async (req, res) => {
        try {
            const studentInfo = await STUDENT.findOne({
                _id: req.body._id,
            })
            if (!studentInfo) {
                return badRequestResponse(res, {
                    message: 'Student not found',
                })
            }
            await STUDENT.findOneAndUpdate(
                { _id: studentInfo._id },
                {
                    $set: {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        age: req.body.age,
                        hobbies: req.body.hobbies,
                        gender: req.body.gender,
                        city: req.body.city,
                    },
                },
            )
            return successResponse(res, {
                message: 'Student updated successfully',
            })
        } catch (error) {
            errorResponse(error, req, res)
        }
    },
    delete: async (req, res) => {
        try {
            const studentInfo = await STUDENT.findOne({
                _id: req.query.id,
            })
            if (!studentInfo) {
                return badRequestResponse(res, {
                    message: 'Student not found',
                })
            }
            await STUDENT.findByIdAndRemove({
                _id: studentInfo._id,
            })
            return successResponse(res, {
                message: 'Student deleted successfully',
            })
        } catch (error) {
            return errorResponse(error, req, res)
        }
    },
    getById: async (req, res) => {
        try {
            const studentInfo = await STUDENT.find({
                _id: req.query.id,
            })
            if (!studentInfo) {
                return badRequestResponse(res, {
                    message: 'Student not found',
                })
            }
            return successResponse(res, {
                message: 'Student Get successfully',
                data : studentInfo
            })
        } catch (error) {
            errorResponse(error, req, res)
        }
    }
}