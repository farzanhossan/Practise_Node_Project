require('dotenv').config();
// console.log(process.env.DB_DIALECT);
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: '',
    database: 'crm_db',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: '',
    database: 'crm_db',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
