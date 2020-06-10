import {getConnection} from "typeorm";
import {User} from '../../entity/User';

const createUser = async ({ firstName, lastName, phone, email }) => {
  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.phone = phone;
  user.email = email;
  return user.save();
}

const getAll = async () => getConnection().manager.find(User);

export default {
  createUser,
  getAll
}
;
