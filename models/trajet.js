const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const TrajetSchema = mongoose.Schema({
  ville_depart: {
    type: String,
    required: true
  },
    ville_arrivee: {
    type: String,
    required: true
  },
  date_depart: {
    type: String,
    required: true
  },
  adr_rdv: {
    type: String,
    required: true
  },
  adr_depose: {
    type: String,
    required: true
  },
  nbrPlaces: {
    type: String,
    required: true
  },
   prix_trajet: {
    type: String,
    required: true
  }
});


const Trajet = module.exports = mongoose.model('Trajet', TrajetSchema);
