const mongoose = require('mongoose');
const { successResponse, badRequestResponse, errorResponse } = require('../middleware/response');
const PRODUCT = mongoose.model('products')

exports.product = {
    get: async (req, res) => {
        try {
            const products = await PRODUCT.find({})
            res.json({
                isSuccess: true,
                data: products
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
            const products = {
                category: req.body.category,
                productName: req.body.productName,
                description: req.body.description,
                price: req.body.price,
                clothSize: req.body.clothSize,
                inStock: req.body.inStock
            }
            const isCreated = await PRODUCT.create(products);
            if (isCreated) {
                return successResponse(res, {
                    message: 'Product created successfully',
                })
            }
            else {
                return badRequestResponse(res, {
                    message: 'Failed to create Product',
                })
            }
        } catch (error) {
            errorResponse(error, req, res)
        }
    },
    put: async (req, res) => {
        try {
            const productInfo = await PRODUCT.findOne({
                _id: req.body.id,
            })
            if (!productInfo) {
                return badRequestResponse(res, {
                    message: 'product not found',
                })
            }
            await PRODUCT.findOneAndUpdate(
                { _id: productInfo._id },
                {
                    $set: {
                        category: req.body.category,
                        productName: req.body.productName,
                        description: req.body.description,
                        price: req.body.price,
                        clothSize: req.body.clothSize,
                        inStock: req.body.inStock
                    },
                },
            )
            return successResponse(res, {
                message: 'product updated successfully',
            })
        } catch (error) {
            errorResponse(error, req, res)
        }
    },
    delete: async (req, res) => {
        try {
            const productInfo = await PRODUCT.findOne({
                _id: req.query.id,
            })
            if (!productInfo) {
                return badRequestResponse(res, {
                    message: 'Product not found',
                })
            }
            await PRODUCT.findByIdAndRemove({
                _id: productInfo._id,
            })
            return successResponse(res, {
                message: 'Product deleted successfully',
            })
        } catch (error) {
            return errorResponse(error, req, res)
        }
    },
    getById: async (req, res) => {
        try {
            const productInfo = await PRODUCT.find({
                _id: req.query.id,
            })
            if (!productInfo) {
                return badRequestResponse(res, {
                    message: 'Product not found',
                })
            }
            return successResponse(res, {
                message: 'Product updated successfully',
                data : productInfo
            })
        } catch (error) {
            errorResponse(error, req, res)
        }
    }
}