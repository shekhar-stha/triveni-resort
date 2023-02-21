const {DataTypes} = require("sequelize")
const db = require("../db/conn")

const GymMember = db.define("gym_member", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    gender:{
        type: DataTypes.ENUM('male','female','others'),
    },
    dob:{
        type: DataTypes.DATE,
    },
    address:{
        type: DataTypes.STRING,
    },
    joined_date:{
        type: DataTypes.DATE,
    },
    end_date:{
        type: DataTypes.DATE,
        allowNull:true,
    },
    status:{
        type: DataTypes.ENUM('active','inactive','grace'),
    },
    weight:{
        type: DataTypes.INTEGER,
    },
    height:{
        type: DataTypes.INTEGER,
    },
});

module.exports = GymMember;