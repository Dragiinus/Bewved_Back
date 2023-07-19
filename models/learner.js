/**************************************/
/*** Import des modules necessaires ***/
/**************************************/
const { DataTypes } = require("sequelize")

/************************************/
/*** Definition du modele Learner ***/
/************************************/
module.exports = (sequelize) => {
    return Learner = sequelize.define("Learner", {
        idLearner: {
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
    }, {timestamps: false, paranoid: false, freezeTableName: true})           // Permet de softDelete
}