const express = require("express");
const mongoose = require("mongoose");
const estanteModel = require("../backend-projeto-estante/models/estante");
const usuarioModel = require("../backend-projeto-estante/models/usuario");

mongoose.connect("mongodb://localhost:27017/Projeto-Estante",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Estante = mongoose.model("Estante", estanteModel);
const Usuario = mongoose.model("Usuario", usuarioModel);

const app = express();

const port = 3000;

// [GET] / - Home
app.get("/", (req, res) => {
  res.send("Bem-Vindo ao Projeto-Estante!");
});

app.put('/estante/:id', async (req, res) => {
  const id = req.params.id;

  const estante = await estanteModel.findById(id);
  const novoLivro = req.body;

  await estanteModel.findOneAndUpdate({ _id: id }, novoLivro);
  
  const livroAtualizado = await estanteModel.findById(id);

  res.send(livroAtualizado);
});

app.delete('/estante/:id', async (req, res) => {
  const id = req.params.id;
 
  const estante = await estanteModel.findById(id);

  await estanteModel.findByIdAndDelete(id);
  
  res.send({ message: 'Livro excluído com sucesso' });
});


// [GET] / - Home
app.get("/", (req, res) => {
  res.send("Bem-Vindo ao Projeto-Estante!");
});

app.post("/usuario", async (req,res) => {
  const {
    nome,idade,nacionalidade,quantidade
  } = req.body;
  const usuario = { nome,  idade, nacionalidade, quantidade }
  const novo = await usuarioModel.create(
    usuario
  )
  res.send({message:"Usuario incluído com sucesso!"})
})

app.put('/usuario/:id', async (req, res) => {
  const id = req.params.id;

  const usuario = await usuarioModel.findById(id);
  const novoUsuario = req.body;

  await usuarioModel.findOneAndUpdate({ _id: id }, novoUsuario);
  
  const usuarioAtualizado = await usuarioModel.findById(id);

  res.send(usuarioAtualizado);
});

app.delete('/usuario/:id', async (req, res) => {
  const id = req.params.id;
 
  const usuario = await usuarioModel.findById(id);

  await usuarioModel.findByIdAndDelete(id);
  
  res.send({ message: 'Usuário excluído com sucesso' });
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
