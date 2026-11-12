require('dotenv').config()
const dbName= process.env.DBNAME
const userName= process.env.DBUSER
const dbpassword=process.env.DBPASSWORD
const host=process.env.DBHOST

module.exports = {
  "development": {
    "username": userName,
    "password": dbpassword,
    "database": dbName,
    "host": host,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
