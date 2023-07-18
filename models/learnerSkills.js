/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { DataTypes } = require("sequelize")
const DB = require("../db.config")

/*********************************/
/*** Definition du modele LearnerSkills ***/
/*********************************/
const LearnerSkills = DB.define("LearnerSkills", {
    idLearner: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true
    },
    idSkill: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true
    },
}, { paranoid: true})           // Permet de softDelete

module.exports = LearnerSkills