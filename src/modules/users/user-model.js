const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {},
  );

  // eslint-disable-next-line no-unused-vars
  User.beforeCreate((user, _) => {
    user.id = uuid();
    return user;
  });

  return User;
};
