const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    nome:String,
    idade: Number,
    nacionalidade: String,
    qtdlivros: Number
});


module.exports = Usuario;