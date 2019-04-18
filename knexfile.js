// Update with your config settings.
require('dotenv').config();
const pg = require('pg');

pg.defaults.ssl = true; // this needs to be false in development, true when using heroku db

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './database/migrations/test'
    },
    seeds: {
      directory: './database/seeds/test'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations/test'
    },
    seeds: {
      directory: './database/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations/production'
    },
    seeds: {
      directory: './database/seeds/production'
    }
  }
};
