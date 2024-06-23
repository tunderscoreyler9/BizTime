// /** Database setup for BizTime. */

// const { Client } = require("pg");
// let DB_URI;

// if (process.env.NODE_ENV === "test") {
//     DB_URI = "postgresql:///biztime_test";
//   } else {
//     DB_URI = "postgresql:///biztime";
// };

// let db = new Client({
//     connectionString: DB_URI
// })

// db.connect();

// module.exports = db;

/** Database setup for BizTime. */


const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql:///biztime"
});

client.connect();


module.exports = client;