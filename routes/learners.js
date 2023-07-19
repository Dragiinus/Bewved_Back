/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const express = require('express')
const learnerCtrl = require('../controllers/learner')

/*****************************************/
/*** Récupération du routeur d'express ***/
/*****************************************/
let router = express.Router()

/***************************************/
/*** Routage de la ressource Learner ***/
/***************************************/

router.get('/', learnerCtrl.getAllLearners)

router.get('/:id', learnerCtrl.getLearner)

router.put('', learnerCtrl.addLearner)

router.patch('/:id', learnerCtrl.updateLearner)

router.delete('/trash/:id', learnerCtrl.trashLearner)

router.delete('/:id', learnerCtrl.deleteLearner)

module.exports = router