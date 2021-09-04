const Sequelize = require('sequelize');
const database = require('../database');
const clients = require('./clients');
const store = require('./stores');

const shoppingCart = database.define('shoppingCart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    shoppingDate: {
        type: Sequelize.DATE
    },
    status: { //retirado, realizado, aberto
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    }
})

clients.hasMany(shoppingCart)

store.belongsTo(shoppingCart)

module.exports = shoppingCart;