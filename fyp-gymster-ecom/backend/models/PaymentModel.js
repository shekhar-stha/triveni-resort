const { DataTypes } = require("sequelize")
const db = require("../db/conn")

const Payment = db.define("payment", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false,
    }
});

module.exports = Payment;