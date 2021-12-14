// Update with your config settings.
require("dotenv").config({path: '/home/james/Documents/Xccelerate/FTWD_Node_Weekly_02/Node/02_Weekly/.env'});

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE,
      user: process.env.USERNAME,
      password: process.env.PASSWORD
    },
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
      tableName: 'knex_migrations'
    }
  },

  production: {
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
      tableName: 'knex_migrations'
    }
  }

};
