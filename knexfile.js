// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
			// Name your database and path
      filename: "./data/car-dealer.db3"
    },
    useNullAsDefault: true,
    migrations: {
			// Configure where you want your migrations folder to live
      directory: "./data/migrations"
    },
    seeds: {
			// Configure where you want your seeds folder to live
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  }
};