const {DataTypes} = require("sequelize")
const db = require("../db/conn")

const Products = db.define("product", {
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,       
        allowNull:false,
        unique: false
    },
    genre:{
        type: DataTypes.ENUM('supplements', 'clothes', 'accessories', 'others', 'gadgets' )
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: false
    },
    discount:{
        type: DataTypes.INTEGER,
        allowNull:true,
        unique: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },
    img:{
        type: DataTypes.ARRAY(DataTypes.STRING),
    }
    
});

module.exports = Products;