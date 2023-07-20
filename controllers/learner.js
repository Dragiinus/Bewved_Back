/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const DB = require('../db.config')
const Learner = DB.Learner

/***************************************/
/*** Routage de la ressource Learner ***/
/***************************************/
exports.getAllLearners = (req, res) => {
    Learner.findAll()
        .then(learners => res.json({ data: learners }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}

exports.getLearner = (req, res) => {
    let learnerId = parseInt(req.params.id)

    if(!learnerId){
        return res.json(400).json({ message: 'Missing parameter'})
    }

    Learner.findOne({ where: {idLearner: learnerId},include: Session, raw: true,})
        .then(learner =>  {
            if((learner === null)){
                return res.status(404).json({ message: 'This learner does not exist !'})
            }

            return res.json({data: learner})
        })
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}

exports.addLearner = (req, res) => {
    const {firstNameLearner, lastNameLearner, genderLearner, ageLearner} = req.body

    if(!firstNameLearner || !lastNameLearner || !genderLearner || !ageLearner){
        return res.status(400).json({ message: 'Missing Data'})
    }

    Learner.findOne({ where: { firstNameLearner: firstNameLearner, lastNameLearner: lastNameLearner}, raw: true})
        .then(learner => {
            if( learner !== null){
                return res.status(409).json({ message: `The learner ${firstNameLearner, lastNameLearner} already exist !`})
            }

            Learner.create(req.body)
                .then(learner => res.json({ message: 'Learner Added', data:learner}))
                .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
        })
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}

exports.updateLearner = (req, res) => {
    let learnerId = parseInt(req.params.id)

    if(!learnerId){
        return res.status(400).json({ message: 'Missing parameter'})
    }

    Learner.findOne({ where: {idLearner: learnerId}, raw: true})
        .then(learner => {
            if(learner === null){
                return res.status(404).json({ message: 'This user does not exist !'})
            }

            Learner.update(req.body, { where: {idLearner: learnerId}})
                .then(learner => res.json({ message: 'Learner updated', data: learner}))
                .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
        })
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}

exports.trashLearner = (req, res) => {
    let learnerId = parseInt(req.params.id)

    if (!learnerId) {
        return res.status(400).json({ message: 'Missing parameter'})
    }

    Learner.destroy({ where: {idLearner: learnerId}})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}

exports.deleteLearner = (req, res) => {
    let learnerId = parseInt(req.params.id)

    if (!learnerId) {
        return res.status(400).json({ message: 'Missing parameter'})
    }

    Learner.destroy({ where: {idLearner: learnerId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}