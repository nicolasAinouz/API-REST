const db = require('./db');
const helper = require('../helper');
const config = require('../config');

/* GET Modele Voiture. */
async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT id, serie, motorisation, puissance, annee FROM modele_voiture LIMIT ${offset},${config.listPerPage}'
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