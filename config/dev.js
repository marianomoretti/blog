const config = {
  "logger": {
    "level": "DEBUG"
  },
  "db": {
    "database": process.env['DBNAME'],
    "username": process.env['DBUSER'],
    "password": process.env['DBPASSWORD'],
    "migrations": {
      "path": "migrations"
    }
    "options": {
      "host": process.env['DBHOST']
    }
  }
};


module.exports = config;
