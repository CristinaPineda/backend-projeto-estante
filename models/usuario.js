const mongoose = require("mongoose");

const usuarioModel = new mongoose.Schema({
    nome: {
        type: String,
        required: true },
    idade: {
        type: Number,
        required: true },
    nacionalidade: {
        type: String,
        required: true },
    quantidade: {
        type: Number,
        required: true },
});

module.exports = usuarioModel;