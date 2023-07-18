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
        primarykey: true,
        autoIncrement: true
    },
    firstNameLearner:{
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false,
    },
    lastNameLearner:{
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false,
    },
    genderLearner:{
        type: DataTypes.TINYINT(1),
        defaultValue: '',
        allowNull: false,
    },
    ageLearner:{
        type: DataTypes.TINYINT(1),
        defaultValue: '',
        allowNull: false,
    },
}, { paranoid: true})           // Permet de softDelete

module.exports = Learner