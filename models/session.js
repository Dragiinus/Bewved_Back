/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { DataTypes } = require("sequelize")


/************************************/
/*** Definition du modele session ***/
/************************************/
module.exports = (sequelize) => {
    return Session = sequelize.define("Session", {
        idsession: {
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
            type: DataTypes.INTEGER(10),
            defaultValue: '',
            allowNull: false,
        },
        maxClass:{
            type: DataTypes.INTEGER(10),
            defaultValue: '',
            allowNull: false,
        },
    }, {timestamps: false, paranoid: false, freezeTableName: true})           // Permet de softDelete
}
