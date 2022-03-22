const router = require('express').Router();
const Usuario = require('../models/Usuario');

router.get('/', async (req, res) => { 
  try {
    const users = await Usuario.find();
    res.status(200).send(users);
    
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const userId = await Usuario.findOne({ _id: id });
    if(!userId) {
      res.status(422).send({ message: 'Usuário não encontrado!'});
    }
    res.status(200).send(userId);
  } catch (err) {
    res.status(500).send({ err: err });
  }
});


router.post('/', async (req, res) => {
  try {
    const { nome, idade, nacionalidade, qtdlivros } = req.body;
    const usuario = { nome, idade, nacionalidade, qtdlivros };
    const user = await Usuario.create(usuario);
    const _id = user._id;
    res.status(201).send({message:'Usuario incluído com sucesso!', id: _id, ...usuario});
  } catch (err) {
    res.status(500).send({err: err});
  }
});



router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade, nacionalidade, qtdlivros } = req.body;
    const usuario = { nome, idade, nacionalidade, qtdlivros };
    
    const upDateUser = await Usuario.updateOne({ _id: id }, usuario);
    if(upDateUser.matchedCount === 0) {
      res.status(422).send({ message: 'Usuário não encontrado!'});
      return;
    }
    res.status(200).send({ message: `Usuario ${id} atualizado com sucesso!`});
  } catch (err) {
    res.status(500).send( {err: err.message } );
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await Usuario.findOne({ _id: id });
  try {

    if(!user) {
      res.status(422).send({ message: 'Usuário não encontrado!'});
      return;
    }
    await Usuario.deleteOne({ _id: id });
    res.status(200).send({ message: 'Usuario removido com sucesso!' });
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

module.exports = router;