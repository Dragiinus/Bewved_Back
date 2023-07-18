/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { Sequelize } = require("sequelize")

/**************************************/
/*** Connexion à la base de données ***/
/**************************************/
let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'mysql',
        logging: false
    }
)

/***********************************/
/*** Synchronisation des modèles ***/
/***********************************/

module.exports = sequelize