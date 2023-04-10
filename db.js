// const knex = require('knex')

// module.exports = knex({
//   client: 'postgres',
//   connection: {
//     host: 'db',
//     user: 'testUser',
//     password: 'mypassword123',
//     database: 'testUser',
    
//   },
// })

const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: 'postgres://express_api_db_k6xb_user:oSpt61AuwQmRajf8KsNBxwClKJBiWmSj@dpg-cgpulqgrddl9mmp02fbg-a/express_api_db_k6xb',
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = db;
