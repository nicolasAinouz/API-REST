const express = require("express");
const app = express();
const port = 8080;
const marqueVoitureRouter = require("./routes/marqueVoiture");
const modeleVoitureRouter = require("./routes/modeleVoiture");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/marque-voiture", marqueVoitureRouter);
app.use("/modele-voiture", modeleVoitureRouter);

/* Gestion erreur */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Le serveur est lancé a cette adresse http://localhost:${port}`);
});