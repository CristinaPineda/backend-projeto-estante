// const mongoose = require('mongoose');
const mongoose = require('./connection');

const usuarioModel = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  nacionalidade: {
    type: String,
    required: true,
  },
  qtdlivros: {
    type: Number,
    required: true,
  },
});

const Usuario = mongoose.model('Usuario', usuarioModel);

module.exports = Usuario;