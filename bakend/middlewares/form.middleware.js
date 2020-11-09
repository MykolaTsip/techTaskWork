const chalk = require('chalk')

const {ErrorHandle, ErrorEnum, ErrorStatusEnum} = require('../errors')
const {formObj} = require('../validators')

module.exports = async (req, res, next) => {
try {
  const emailObj = req.body

    if (!emailObj) {
        return next(new ErrorHandle(
            ErrorEnum.NOT_FOUND_DATA.message,
            ErrorStatusEnum.NOT_FOUND_DATA,
            ErrorEnum.NOT_FOUND_DATA.customCode
        ))
    }

    const {error} =  await formObj.validate(emailObj)

    if (error) {
        return next(new ErrorHandle(
            ErrorEnum.NOT_VALID_DATA.message,
            ErrorStatusEnum.NOT_VALID_DATA,
            ErrorEnum.NOT_VALID_DATA.customCode
        ))
    }

    next()
}
catch (e) {
    console.log(chalk.gray(e))
     next(e)
}
}
