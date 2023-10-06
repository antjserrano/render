const express = require('express');
const app = express();
const path = require('path');

// Agrega esta línea para servir archivos estáticos desde la misma ubicación
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
