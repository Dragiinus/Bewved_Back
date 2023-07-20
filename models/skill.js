/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { DataTypes } = require("sequelize")
const DB = require("../db.config")

/**************************************/
/*** Definition du modele SkillName ***/
/**************************************/
const SkillName = DB.define("SkillName", {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    skillName:{
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false,
    },
}, {timestamps: false, paranoid: false, freezeTableName: true})           // Permet de softDelete

module.exports = SkillName