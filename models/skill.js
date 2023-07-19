/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { DataTypes } = require("sequelize")
const DB = require("../db.config")

/************************************/
/*** Definition du modele SkillName ***/
/************************************/
const SkillName = DB.define("SkillName", {
    id: {
        type: DataTypes.INTEGER(10),
        primarykey: true,
        autoIncrement: true
    },
    skillName:{
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false,
    },
}, { paranoid: true})           // Permet de softDelete

module.exports = SkillName