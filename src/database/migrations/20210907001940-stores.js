'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stores', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    city: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stores');
  }
};

