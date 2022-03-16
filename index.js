const express = require("express");
const mongoose = require("mongoose");
const estanteModel = require("../backend-projeto-estante/models/estante");
mongoose.connect("mongodb://localhost:27017/Projeto-Estante",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Estante = mongoose.model("Estante", estanteModel);

const app = express();

const port = 3000;

// [GET] / - Home
app.get("/", (req, res) => {
  res.send("Bem-Vindo ao Projeto-Estante!");
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
