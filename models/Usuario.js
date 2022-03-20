const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
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

module.exports = Usuario;