const chalk = require('chalk')

const find = require('../services/findEmail')


module.exports = {
    genericEmail:  async (req, res) => {
        try {
            let data = Object.values(req.body)

           const emailService = ['@com.ua', '@gmail.com', '@yahoo.com', '@outlook.com', '@i.ua', '@mail.com', '@mail.ru',
           '@inbox.ru', '@list.ru', '@bk.ru']

            let gmail = [];

            let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

            for (let i = 0; i < Math.round(Math.random() * 1 + 4); i++) {

                for (let i = 0; i < data.length; i++) {

                    const randomizer = Math.round(Math.random() * 12)


                    const a = Math.round(Math.random() * 4)

                    if (a === 3 || a === 4) {
                        data.push(possible.charAt(Math.floor(Math.random() * possible.length)))
                    }

                    const b = Math.round(Math.random() * 2)

                    const c = Math.round(Math.random() * 2)

                    const randomIndex = Math.round(Math.random() * emailService.length)

                    switch (randomizer) {
                        case 0:
                            gmail.push(data[a]+ '.' + data[b] + '.' + data[c] + emailService[randomIndex])
                            break;
                        case 1:
                            gmail.push(data[a]+ '-' + data[b] + '.' + data[c] + emailService[randomIndex])
                            break;
                        case 2:
                            gmail.push(data[a]+ '.' + data[b] + '-' + data[c] + emailService[randomIndex])
                            break;
                        case 3:
                            gmail.push(data[a]+ '-' + data[b] + '-' + data[c] + emailService[randomIndex])
                            break;
                        case 4:
                            gmail.push(data[a]+ '_' + data[b] + '_' + data[c] + emailService[randomIndex])
                            break;
                        case 5:
                            gmail.push(data[a]+ '-' + data[b] + '_' + data[c] + emailService[randomIndex])
                            break;
                        case 6:
                            gmail.push(data[a]+ '_' + data[b] + '-' + data[c] + emailService[randomIndex])
                            break;
                        case 7:
                            gmail.push(data[a]+ '_' + data[b] + '.' + data[c] + emailService[randomIndex])
                            break;
                        case 8:
                            gmail.push(data[a]+ '.' + data[b] + '_' + data[c] + emailService[randomIndex])
                            break;
                        case 9:
                            gmail.push( data[b] + '-' + data[c] + emailService[randomIndex])
                            break
                        case 10:
                            gmail.push( data[b] + '_' + data[c] + emailService[randomIndex])
                            break
                        case 11:
                            gmail.push( data[b] + '.' + data[c] + emailService[randomIndex])
                            break
                        case 12:
                            gmail.push( data[b] + '' + data[c] + emailService[randomIndex])
                            break
                    }

                }


            }

            for (let i = 0; i < gmail.length; i++) {
                await find.mxExists(gmail[i])
                    .then(info => console.log(info + ' ' + i ))
                    .catch(err => gmail.splice(i, 1))
            }

            res.json(gmail)
        }
        catch (e) {
            console.log(chalk.bgBlue(e))
        }
    },

}
