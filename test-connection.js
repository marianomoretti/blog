const Sequelize = require('sequelize');
const config = require('./config').db;

// const sequelize = new Sequelize('mysql://bd06a5450ddab8:1fcad814@us-cdbr-iron-east-04.cleardb.net/heroku_8914163247c4a6c?reconnect=true');
//

const sequelize = new Sequelize(config.database, config.username, config.password, config.options);

console.log(JSON.stringify(config, null, 2));

sequelize
  .authenticate()
  .then(console.log);
