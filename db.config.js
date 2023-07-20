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

module.exports = sequelize
/***********************************/
/*** Mise en place des relations ***/
/***********************************/
const db = {}

db.sequelize = sequelize
db.Learner = require('./models/learner')(sequelize)
db.Session = require('./models/session')(sequelize)

db.Session.hasMany(db.Learner, { onDelete: 'cascade'})
db.Learner.belongsTo(db.Session)

// db.sequelize.sync({alter: true})

module.exports = db
