let Sequelize = require('sequelize');

module.exports = {

  modelName: "Post",

  attributes: {
      title: Sequelize.STRING,
      body: Sequelize.TEXT
  },

  afterDefined (models) {
    
  }
};