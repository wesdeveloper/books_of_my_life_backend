const database = require('../../src/modules/database');

module.exports = async () => {
  await database.User.destroy({ truncate: true });
};
