// const pg = require("pg");

// const client = new pg.Client({
//   connectionString: process.env.DATABASE_URL || ""
//   //ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
// });

// client
//   .connect()
//   .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

require('dotenv').config();
const { Pool } = require('pg');
// const dbParams = require('./lib/db.js');


let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}
console.log("TESTING PARAMS", dbParams);
const db = new Pool(dbParams);
db.connect();

//   let dbParams = {};
// if (process.env.DATABASE_URL) {
//   dbParams.connectionString = process.env.DATABASE_URL;
// } else {
//   dbParams = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
//   };
// }

// module.exports = dbParams;

module.exports = db;