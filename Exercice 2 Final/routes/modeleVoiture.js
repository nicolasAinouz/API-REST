const express = require('express');
const router = express.Router();
const modeleVoiture = require('../services/modeleVoiture');

/* gestion erreur GET Modele Voiture. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await modeleVoiture.getMultiple(req.query.page));
  } catch (err) {
    console.error('Erreur de récupération Modele Voiture', err.message);
    next(err);
  }
});

module.exports = router;