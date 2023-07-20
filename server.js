/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const express = require("express");
const cors = require('cors')

/********************************************/
/*** Import de la connexion à la database ***/
/********************************************/
let DB = require("./db.config")

/*******************************/
/*** Initialisation de l'API ***/
/*******************************/
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

/*************************************/
/*** Import des modules de routage ***/
/*************************************/
const learner_router = require('./routes/learners')
const session_router = require('./routes/sessions')


/********************************/
/*** Mise en place du routage ***/
/********************************/
app.get("*", (req, res) => res.status(501).send(`This ressource doesn't exist`))


/***************************************/
/*** Start server avec test database ***/
/***************************************/
DB.sequelize.authenticate()
    .then(() => console.log("Database connection OK"))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`This server is running on port ${process.env.SERVER_PORT}. Have fun !`)
        })
    })
    .catch(err => console.log("Database Error", err))