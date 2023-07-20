/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const express = require('express')
const sessionCtrl = require('../controllers/session')

/*****************************************/
/*** Récupération du routeur d'express ***/
/*****************************************/
let router = express.Router()

/***************************************/
/*** Routage de la ressource Learner ***/
/***************************************/

router.get('/', sessionCtrl.getAllSessions)

router.get('/:id', sessionCtrl.getSession)

router.put('', sessionCtrl.addSession)

router.patch('/:id', sessionCtrl.updateSession)

router.delete('/trash/:id', sessionCtrl.trashSession)

router.delete('/:id', sessionCtrl.deleteSession)

module.exports = router