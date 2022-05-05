const db = require('./db');
const helper = require('../helper');
const config = require('../config');

/* GET Marque Voiture. */
async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT id, nom, fondateur, creation, origine FROM marque_de_voiture LIMIT ${offset},${config.listPerPage}'
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}

/* POST Marque Voiture. */
async function create(marqueVoiture){
    const result = await db.query(
      'INSERT INTO marque_de_voiture (nom, fondateur, creation, origine) VALUES  (${marqueVoiture.nom}, ${marqueVoiture.fondateur}, ${marqueVoiture.creation}, ${marqueVoiture.origine})'    );
  
    let message = 'Erreur dans l écriture de Marque de voiture';
  
    if (result.affectedRows) {
      message = 'ligne Marque Voiture crée';
    }
  
    return {message};
  }

  module.exports = {
    getMultiple,
    create
  }