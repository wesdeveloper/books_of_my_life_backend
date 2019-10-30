import * as fs from 'fs';
import * as path from 'path';
import { Sequelize } from 'sequelize';

const config = require('../config');

const db: any = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { dialect: 'postgres', host: config.host },
);

fs.readdirSync(__dirname).forEach(folder => {
  if (folder !== 'database.ts' && folder !== 'helpers.ts') {
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

export default db;
