const express = require("express")

const app = express()

//rotas
const index = require('./routes/index')
const alunas = require('./routes/alunasRoute')

app.use('/', index)
app.use('/alunas', alunas)


//exportando um modulo
module.exports = app

