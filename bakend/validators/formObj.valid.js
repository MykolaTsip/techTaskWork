const Joi = require('joi')

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(3).required(),
    surname: Joi.string().trim().min(3).required(),
    company:  Joi.string().trim().min(3).required()
})
