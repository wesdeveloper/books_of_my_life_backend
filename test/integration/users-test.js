const Chance = require('chance');
const { assert } = require('chai');
const app = require('../../src');
const { clearDatabase } = require('../populate');

const chance = new Chance();

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
        const data = result.json();
        assert.strictEqual(result.statusCode, 201);
        assert.strictEqual(data.name, payload.name);
        assert.strictEqual(data.phone, payload.phone);
        assert.strictEqual(data.email, payload.email);
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
