const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = {
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  host: DB_HOST,
  dialect: 'postgres',
};
