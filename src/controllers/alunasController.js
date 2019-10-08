const alunas = require('../model/alunas.json')

exports.get = (require, response) => {
    console.log(require.url)
    response.status(200).send(alunas)
}

exports.getById = (require, response) => {
    const id = require.params.id
    console.log(id)
    response.status(200).send(alunas.find(aluna => aluna.id == id))
}