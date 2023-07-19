/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { DataTypes } = require("sequelize")
const DB = require("../db.config")

/**********************************/
/*** Definition du modele class ***/
/**********************************/
const Class = DB.define("Class", {
    id: {
        type: DataTypes.INTEGER(10),
        primarykey: true,
        autoIncrement: true
    },
    nameClass:{
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false,
    },
    minClass:{
        type: DataTypes.TINYINT(1),
        defaultValue: '',
        allowNull: false,
    },
    maxClass:{
        type: DataTypes.TINYINT(1),
        defaultValue: '',
        allowNull: false,
    },
}, { paranoid: true})           // Permet de softDelete

module.exports = Class