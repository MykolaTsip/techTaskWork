const {Router} = require('express')

const {emailController} = require('../controllers')
const {formMiddleware} = require('../middlewares')

const emailRouter = Router()

emailRouter.post('/', formMiddleware, emailController.genericEmail)


module.exports = emailRouter
