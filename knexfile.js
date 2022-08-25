// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "pg",
  connection: {
    host: process.env.HOST_NAME,
    port: process.env.PORT,
    user: process.env.USER,
    database: process.env.DATABASE,
  },
};
