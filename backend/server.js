const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/searchDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB:'));
db.once('open', () => console.log('Connecté à MongoDB'));

// Démarrage du serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Item', ItemSchema);