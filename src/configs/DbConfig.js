const env = process.env;
const fs = require('fs');
const Pool = require('pg').Pool

// const db = {
//   host: env.DB_HOST,
//   user: env.DB_USER,
//   password: env.DB_PASSWORD,
//   database: env.DB_NAME || 'programming_languages',
//   port: env.DB_PORT || 3306,
//   ssl: {
//     mode: 'VERIFY_IDENTITY',
//     ca: fs.readFileSync('/etc/ssl/cert.pem', 'utf-8'),
//   }
// };
const db = {
  user: 'renaldolouis',
  host: 'localhost',
  database: 'delterrademo',
  password: 'password',
  port: 5432,
};

const pool = new Pool(db)

module.exports = pool;
