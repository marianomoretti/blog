'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('post', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: Sequelize.STRING,
      body: Sequelize.TEXT
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('post');
  }
};
