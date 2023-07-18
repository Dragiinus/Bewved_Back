/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { DataTypes } = require("sequelize")
const DB = require("../db.config")

/************************************/
/*** Definition du modele user ***/
/************************************/
const User = DB.define("User", {
    id: {
        type: DataTypes.INTEGER(10),
        primarykey: true,
        autoIncrement: true
    },
    nameUser:{
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false,
    },
    emailUser:{
        type: DataTypes.STRING,
        validate:{
            isEmail: true       // Validation de données
        }
    },
    role:{
        type: DataTypes.TINYINT(1),
        defaultValue: '',
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i   // Contrainte
    },
}, { paranoid: true})           // Permet de softDelete

module.exports = User