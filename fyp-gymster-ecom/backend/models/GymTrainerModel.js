const { DataTypes } = require("sequelize")
const db = require("../db/conn")

const GymTrainer = db.define("gym_trainer", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    gender:{
        type: DataTypes.ENUM('male','female','others'),
    },
    dob: {
        type: DataTypes.DATE,
        allowNull:false,
        unique: false
    },
    routine: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    }
});

module.exports = GymTrainer;