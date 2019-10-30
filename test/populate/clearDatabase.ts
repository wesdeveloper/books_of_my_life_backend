import database from '../../src/modules/database';

export default async () => {
  await database.User.destroy({ truncate: true });
};
