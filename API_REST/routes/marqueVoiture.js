const express = require('express');
const router = express.Router();
const marqueVoitures = require('../services/marqueVoiture');

/* gestion erreur GET Marque Voiture. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await marqueVoitures.getMultiple(req.query.page));
  } catch (err) {
    console.error('Erreur de récupération de Marque Voiture', err.message);
    next(err);
  }
});

module.exports = router;

/* gestion erreur POST Marque Voiture */
router.post('/', async function(req, res, next) {
    try {
      res.json(await marqueVoitures.create(req.body));
    } catch (err) {
      console.error('Erreur insertion dans Marque Voiture', err.message);
      next(err);
    }
  });