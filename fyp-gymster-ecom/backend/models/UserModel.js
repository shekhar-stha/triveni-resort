const {DataTypes} = require("sequelize")
const db = require("../db/conn")

const User = db.define("user", {
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    email:{
        type: DataTypes.STRING,       
        allowNull:false,
        unique: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    full_name:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },
    role:{
        type: DataTypes.ENUM('admin','user','gym_member','gym_trainer')
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    confirm_password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    phone_number:{
        type: DataTypes.STRING,
        unique: true
    }
});

module.exports = User;