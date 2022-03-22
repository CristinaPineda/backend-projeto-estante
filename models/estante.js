// const mongoose = require("mongoose");
const mongoose = require('./connection');

const estanteModel = new mongoose.Schema({
    titulo: {
        type: String,
        required: true },
    autor: {
        type: String,
        required: true },
    categoria: {
        type: String,
        required: true },
    isbn: {
        type: Number,
        required: true },
    nacionalidade: {
        type: String,
        required: true },
    ano: {
        type: Number,
        required: true },
    paginas: {
        type: Number,
        required: true },
    editora: {
        type: String,
        required: true },
    observacoes: {
            type: String,
            required: true }, 
    
});

const estante = mongoose.model('Estante', estanteModel);

module.exports = estante;
