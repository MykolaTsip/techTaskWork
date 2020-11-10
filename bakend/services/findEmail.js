const dnsPromises = require('dns').promises;

const mxExists =  email => {
    return  new Promise((res, rej) => {
        try {
             const hostname = email.split("@")[1];

            dnsPromises.resolveMx(hostname).then(addresses => {
                if (addresses && addresses.length) {
                    addresses[0].exchange ? res(true) : res(false);
                }
            })
                .catch(err => {

                    console.log("mx-check.js - resolveMx ERROR:\n" + err);
                    res(false);
                });
        } catch (err) {

            console.log("mx-check.js ERROR:\n" + err);
            rej(false);
        }
    });
}


module.exports = {
    mxExists
}
