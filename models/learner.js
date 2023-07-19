/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { DataTypes } = require("sequelize")
const DB = require("../db.config")

/************************************/
/*** Definition du modele Learner ***/
/************************************/
const Learner = DB.define("Learner", {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    firstNameLearner:{
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: true,
    },
    lastNameLearner:{
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: true,
    },
    genderLearner:{
        type: DataTypes.TINYINT(1),
        defaultValue: '',
        allowNull: true,
    },
    ageLearner:{
        type: DataTypes.TINYINT(1),
        defaultValue: '',
        allowNull: true,
    },
}, { paranoid: true})           // Permet de softDelete

module.exports = Learner