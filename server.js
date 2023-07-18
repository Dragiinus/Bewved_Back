const express = require("express");
const port = 5000;

const app = express();

app.get("/post", (req, res) => {
    res.json({ message: "Voici les données"})
})


/*********************/
/* Lancer le serveur */
/*********************/
app.listen(port, () => console.log("Le serveur a démarré au port " + port));