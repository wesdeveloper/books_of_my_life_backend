const Chance = require('chance');
const { assert } = require('chai');
const app = require('../../src');
const { clearDatabase } = require('../populate');

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
        user = result.json();
        assert.strictEqual(result.statusCode, 201);
        assert.strictEqual(user.name, payload.name);
        assert.strictEqual(user.phone, payload.phone);
        assert.strictEqual(user.email, payload.email);
      });
  });

  it('Should get a user by id and receive 200', async () => {
    return app
      .inject({
        method: 'GET',
        url: `/api/users/${user.id}`
      })
      .then(result => {
        const data = result.json();
        assert.strictEqual(result.statusCode, 200);
        assert.isObject(data);
        assert.strictEqual(data.id, user.id);
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
          assert.strictEqual(result.statusCode, 400);
          const [error] = result.json();
          assert.strictEqual(error.path, key);
        });
    });
  });
});
