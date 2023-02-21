const { DataTypes } = require("sequelize")
const db = require("../db/conn")

const Orders = db.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    ordered_date: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false
    },
    status: {
        type: DataTypes.ENUM('Delivered', 'Cancelled', 'Shipping'),
        allowNull: false,
        unique: false
    },
    delivered_date: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    payment_type: {
        type: DataTypes.ENUM('Cash', 'Khalti'),
        allowNull: false,
        unique: false
    }
});

module.exports = Orders;