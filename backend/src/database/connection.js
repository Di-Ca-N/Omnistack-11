const knex = require("knex");
const configuration = require("../../knexfile");

let env = process.env.NODE_ENV;

if (env === undefined) {
  env = "development";
}
const connection = knex(configuration[env]);

module.exports = connection;
