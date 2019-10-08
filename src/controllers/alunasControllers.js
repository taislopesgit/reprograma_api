const alunas = require('../model/alunas.json')

exports.get = (require, response) => {
    console.log(require.url)
    response.status(200).send(alunas)
}