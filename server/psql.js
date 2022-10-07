const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "database-1.cg8edfx0izz1.ap-northeast-2.rds.amazonaws.com",
  database: "fsf2_game",
  password: "users!234",
  port: 5432,
});

client.connect();

// client.connect();
// client.query("SELECT * FROM data_able_character;", (err, res) => {
//   console.log(err, res);
//   client.end();
// });

module.exports = client