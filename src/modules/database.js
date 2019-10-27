const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = require('../config');

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

fs.readdirSync(__dirname).forEach(folder => {
  if (folder !== 'database.js' && folder !== 'helpers.js') {
    fs.readdirSync(path.resolve(__dirname, folder))
      .filter(file => file.includes('model'))
      .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, folder, file));
        db[model.name] = model;
      });
  }
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
