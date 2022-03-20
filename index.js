require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
// const mongoose = require("mongoose");
const express = require('express');
const session = require('express-session');
// const estanteModel = require("../backend-projeto-estante/models/estante");
const Usuario = require('./models/Usuario');

// const Estante = mongoose.model("Estante", estanteModel);
// const Usuario = mongoose.model("Usuario", usuarioModel);

const SECRET = process.env.SECRET;

const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(session({
  secret: SECRET,
  resave: true,
  saveUninitialized: true,
}));

// eslint-disable-next-line no-unused-vars
const db = require('./models/connection');


app.get('/usuario', (req, res) => {
  return res.send({ message: 'pagina do usuario'});
});

app.post('/usuario', async (req, res) => {
  try {
    const { nome, idade, nacionalidade, qtdlivros } = req.body;
    if(!nome){
      res.status(422).send({error: 'nome não inserido'});
    } else {
      const usuario = { nome, idade, nacionalidade, qtdlivros };
      const user = await Usuario.create(usuario);
      const _id = user._id;
      return res.status(201).send({message:'Usuario incluído com sucesso!', id: _id, ...usuario});
    }
  } catch (err) {
    res.status(500).send({err: err});
  }
});

// app.put('/estante/:id', async (req, res) => {
//   const id = req.params.id;

//   const estante = await estanteModel.findById(id);
//   const novoLivro = req.body;

//   await estanteModel.findOneAndUpdate({ _id: id }, novoLivro);
  
//   const livroAtualizado = await estanteModel.findById(id);

//   res.send(livroAtualizado);
// });

// app.delete('/estante/:id', async (req, res) => {
//   const id = req.params.id;
 
//   const estante = await estanteModel.findById(id);

//   await estanteModel.findByIdAndDelete(id);
  
//   res.send({ message: 'Livro excluído com sucesso' });
// });




// app.put('/usuario/:id', async (req, res) => {
//   const id = req.params.id;

//   const usuario = await usuarioModel.findById(id);
//   const novoUsuario = req.body;

//   await usuarioModel.findOneAndUpdate({ _id: id }, novoUsuario);
  
//   const usuarioAtualizado = await usuarioModel.findById(id);

//   res.send(usuarioAtualizado);
// });

// app.delete('/usuario/:id', async (req, res) => {
//   const id = req.params.id;
 
//   const usuario = await usuarioModel.findById(id);

//   await usuarioModel.findByIdAndDelete(id);
  
//   res.send({ message: 'Usuário excluído com sucesso' });
// });

app.get('/', (req, res) => {
  res.send('Bem-Vindo ao Projeto-Estante!');
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
