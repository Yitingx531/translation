const { Pool } = require('pg');

type callback = () => void;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'translation',
    password: '0531',
    port: 5432,
  });

  module.exports = {
    query: (text: string, params: string, callback: callback) => {
        console.log('executed query hello', text);
        return pool.query(text, params, callback);
      }
  };