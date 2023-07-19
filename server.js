/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const express = require("express");
const cors = require('cors')
const api = "/api/v0/"

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
/***   API ENTITIES ROUTES    ***/
/********************************/

// // CLASSES
// /**
//  * GET ALL classes
//  */
// app.get( api + 'class', async (req, res) => {
//     try {
//         return res.send(`ALL CLASSES`);
//     } catch (e) {
//         return res.status(400).json({ message: e.message });
//     }
// });
// /**
//  * GET Class BY id
//  */
// app.get( api + 'class/:id', async (req, res) => {
//     try {
//         return res.send(`CLASS number : ` + req.params.id);
//     } catch (e) {
//         return res.status(400).json({ message: e.message });
//     }
// });

// // LEARNER
// /**
//  * GET learner BY id
//  */
// app.get( api + 'learner/:id', async (req, res) => {
//     try {
//         return res.send(`LEARNER number : ` + req.params.id);
//     } catch (e) {
//         return res.status(400).json({ message: e.message });
//     }
// });

// /**
//  * POST learner
//  */
// app.put( api + 'learner/', async (req, res) => {
//     try {
//         const learner = req.body.learner;
//         if (learner) { // todo : add service
//             const newLearner = learner;
//             return res.status(201).json({ learner: newLearner });
//         } else {
//             return res.status(400).json({ message: 'Bad parameters.' });
//         }
//     } catch (e) {
//         return res.status(400).json({ message: e.message });
//     }
// });

// /**
//  * PUT learner
//  */
// app.put( api + 'learner/:id', async (req, res) => {
//     try {
//         const { learner } = req.body;
//         const newLearner = learner;
//         if (newLearner) { // todo : add service
//             return res.json({ newLearner });
//         } else {
//             return res.status(404).json({ message: 'Learner not found.' });
//         }
//     } catch (e) {
//         return res.status(400).json({ message: e.message });
//     }
// });

// /**
//  * DELETE learner
//  */
// app.delete( api + 'learner/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         if ( await LearnerService.delete(id) ) { // todo : add service
//             return res.sendStatus(204);
//         } else {
//             return res.status(404).json({ message: 'learner not found.' });
//         }
//     } catch (e) {
//         return res.status(400).json({ message: e.message });
//     }
// });

/********************************/
/***    API GENERAL ROUTES    ***/
/********************************/
app.get( '/', (req, res) => res.send(`I'm online, well done !`))

app.use('/learners', learner_router)
app.use('/sessions', session_router)

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