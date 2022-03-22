const router = require('express').Router();
const estante = require('../models/estante');

router.get('/', async (req, res) => { 
    try {
      const bookcase = await estante.find();
      res.status(200).send(bookcase);
      
    } catch (err) {
      res.status(500).send({ err: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const bookId = await estante.findOne({ _id: id });
      if(!bookId) {
        res.status(422).send({ message: 'Usuário não encontrado!'});
      }
      res.status(200).send(bookId);
    } catch (err) {
      res.status(500).send({ err: err });
    }
});

router.post('/', async (req, res) => {
    try {
      const { titulo, autor, categoria, isbn, nacionalidade, ano, paginas, editora, observacoes} = req.body;
      const book = { titulo, autor, categoria, isbn, nacionalidade, ano, paginas, editora, observacoes };
      const books = await estante.create(book);
      const _id = books._id;
      res.status(201).send({message:'Livro incluído com sucesso!', id: _id, ...estante});
    } catch (err) {
      res.status(500).send({err: err });
    }
  });

module.exports = router;