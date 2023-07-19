/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { DataTypes } = require("sequelize")
const DB = require("../db.config")

/************************************/
/*** Definition du modele session ***/
/************************************/
const Session = DB.define("Session", {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
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
}, {timestamps: false, paranoid: false, freezeTableName: true})           // Permet de softDelete

module.exports = Session