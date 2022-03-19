const mongoose = require('mongoose');
require('dotenv').config();

const { KEY, URI } = process.env;

mongoose
    .connect(`${KEY}${URI}`, {})
    .then(() => {
        console.log('MongodbAtlas conectado');
    })
    .catch((err) => {
        console.error(err);
    });

const bd = mongoose.connection;

module.exports = bd;
