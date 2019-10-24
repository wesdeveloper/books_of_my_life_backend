const { assert } = require('chai');
const app = require('../../src');

describe('Health status - [TESTS INTEGRATION]', () => {
  it('Should make a request to health-status route and receive 200', async () => {
    app
      .inject({
        method: 'GET',
        url: '/api/health-status',
      })
      .then(result => {
        assert.strictEqual(result.statusCode, 200);
      });
  });
});
