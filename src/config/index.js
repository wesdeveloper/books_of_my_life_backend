const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = {
  username: DB_USER || 'manager',
  password: DB_PASS || 'manager',
  database: DB_NAME || 'books_of_my_life',
  host: DB_HOST || 'localhost:3307',
  dialect: 'mysql'
};
