import 'should';
import { Chance } from 'chance';
import app from '../../bin';
import { clearDatabase } from '../populate';

const chance = new Chance();

let user;

describe('Users - [TESTS INTEGRATION]', () => {
  after(async () => {
    await clearDatabase();
  });

  it('Should create a user and receive 201', async () => {
    const payload = {
      name: chance.name(),
      phone: chance.phone(),
      email: chance.email(),
    };
    return app
      .inject({
        method: 'POST',
        url: '/api/users',
        payload,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(result => {
        user = JSON.parse(result.payload);
        result.statusCode.should.be.eql(201);
        user.name.should.be.eql(payload.name);
      });
  });

  it('Should get a user by id and receive 200', async () => {
    return app
      .inject({
        method: 'GET',
        url: `/api/users/${user.id}`,
      })
      .then(result => {
        const data = JSON.parse(result.payload);
        result.statusCode.should.be.eql(200);
        data.id.should.be.eql(user.id);
      });
  });
});

describe('Test validation properties', () => {
  const payloadKeys = ['name', 'phone', 'email'];
  payloadKeys.forEach(key => {
    const payload = {
      name: chance.name(),
      phone: chance.phone(),
      email: chance.email(),
    };
    delete payload[key];
    it(`Should try to create a users missing key ${key} and receive 400`, async () => {
      return app
        .inject({
          method: 'POST',
          url: '/api/users',
          payload,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(result => {
          result.statusCode.should.be.eql(400);
          const [error] = JSON.parse(result.payload);
          error.path.should.be.eql(key);
        });
    });
  });
});
