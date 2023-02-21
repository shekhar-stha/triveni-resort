const { DataTypes } = require("sequelize")
const db = require("../db/conn")

const FeatureProducts = db.define("feature_products", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
});

module.exports = FeatureProducts;