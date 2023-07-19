/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const DB = require('../db.config')
const Session = DB.Session

/***************************************/
/*** Routage de la ressource Session ***/
/***************************************/
exports.getAllSessions = (req, res) => {
    Session.findAll()
        .then(sessions => res.json({ data: sessions }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}

exports.getSession = (req, res) => {
    let sessionId = parseInt(req.params.id)

    if(!sessionId){
        return res.json(400).json({ message: 'Missing parameter'})
    }

    Session.findOne({ where: {id: sessionId}, raw: true})
        .then(session =>  {
            if((session === null)){
                return res.status(404).json({ message: 'This session does not exist !'})
            }

            return res.json({data: session})
        })
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}

exports.addSession = (req, res) => {
    const {nameClass, minClass, maxClass} = req.body

    if(!nameClass || !minClass || !maxClass){
        return res.status(400).json({ message: 'Missing Data'})
    }

    Session.findOne({ where: { nameClass: nameClass}, raw: true})
        .then(session => {
            if( session !== null){
                return res.status(409).json({ message: `The session ${nameClass} already exist !`})
            }

            Session.create(req.body)
                .then(session => res.json({ message: 'Session Added', data:session}))
                .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
        })
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}

exports.updateSession = (req, res) => {
    let sessionId = parseInt(req.params.id)

    if(!sessionId){
        return res.status(400).json({ message: 'Missing parameter'})
    }

    Session.findOne({ where: {id: sessionId}, raw: true})
        .then(session => {
            if(session === null){
                return res.status(404).json({ message: 'This session does not exist !'})
            }

            Session.update(req.body, { where: {id: sessionId}})
                .then(session => res.json({ message: 'Session updated'}))
                .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
        })
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}

exports.trashSession = (req, res) => {
    let sessionId = parseInt(req.params.id)

    if (!sessionId) {
        return res.status(400).json({ message: 'Missing parameter'})
    }

    Session.destroy({ where: {id: sessionId}})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}

exports.deleteSession = (req, res) => {
    let sessionId = parseInt(req.params.id)

    if (!sessionId) {
        return res.status(400).json({ message: 'Missing parameter'})
    }

    Session.destroy({ where: {id: sessionId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err}))
}