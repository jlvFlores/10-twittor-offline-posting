// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


const mensajes = {
  id: 'XXX',
  user: 'Spiderman',
  mensaje: 'Hola mundo'
}




// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});




module.exports = router;