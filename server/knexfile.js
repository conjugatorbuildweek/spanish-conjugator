// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './server/api/database/auth.sqlite3' },

    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: './server/api/database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },
};
