/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { Sequelize } = require("sequelize")

/**************************************/
/*** Connexion à la base de données ***/
/**************************************/
let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }
)
/***********************************/
/*** Mise en place des relations ***/
/***********************************/
const db = {}

db.sequelize = sequelize
db.Learner = require('./models/learner')(sequelize)
db.Session = require('./models/session')(sequelize)
db.Skill = require('./models/skill')(sequelize)
// let Learner_has_Skill: sequelize.model

// Table intermediaire "models"

db.Session.hasMany(db.Learner, {foreignKey: 'idsession', onDelete: 'cascade'})
db.Learner.belongsTo(db.Session, {foreignKey: 'idLearner'})
//Many to Many
db.Learner.belongsToMany(db.Learner, { through: 'Learner_has_Skill', as: "Learner_has_Skill_Learner", foreignKey: 'Learner_idLearner'});
db.Skill.belongsToMany(db.Skill, { through: 'Learner_has_Skill', as: "Learner_has_Skill_Skill", foreignKey: 'Skill_idSkill'});
db.Learner.hasMany(db.Skill);
db.Skill.belongsTo(db.Learner);

module.exports = db
