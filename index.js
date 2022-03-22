require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const session = require("express-session");

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

const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/usuario', usuarioRoutes);

const estanteRoutes = require('./routes/estanteRoutes');
app.use('/estante', estanteRoutes);


app.get('/', (_req, res) => {
  res.json({message: 'Bem-Vindo ao Projeto-Estante!'});
});

app.listen(port, () => {
  console.info(`Api rodando em: http://localhost:${port}`);
});