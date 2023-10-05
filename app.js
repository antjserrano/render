const express = require('express')
const app = express()
const path = require('path')

app.get('/', function (req, res){
    // res.send('hola mundo')
    res.sendFile(path.resolve(__dirname, 'index.html'))
    res.sendFile(path.resolve(__dirname, '/Proy_001_TallerCoche/CSS/style2.css'))
})

app.listen(3000)