const config = {
  "logger": {
    "level": "DEBUG"
  },
  "db": {
    "database": process.env['DBNAME'],
    "username": process.env['DBUSER'],
    "password": process.env['DBPASSWORD'],
    "options": {
      "host": process.env['DBHOST']
    }
  }
};

console.log("config", JSON.stringify(config, null, 2));

module.exports = config;
