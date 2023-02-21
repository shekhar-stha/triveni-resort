const { DataTypes } = require("sequelize")
const db = require("../db/conn")

const Membership = db.define("membership", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    }
});

module.exports = Membership;