const express = require('express')
const chalk = require('chalk')

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(express.json())


server.use('*', (err, req, res, next) => {
    res.status(err.status)
        .json({
            message: err.message,
            code: err.customCode
        })
})

server.listen(5001, (err) => {
    if (err) {
        console.log(chalk.bgYellow(err))
    }

    console.log('server is work!')
})


process.on("unhandledRejection", reason => {
    console.log('---------')
    console.log(chalk.bgYellow(reason))
    console.log('----------------')
})
