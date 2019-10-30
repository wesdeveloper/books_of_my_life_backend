import 'should';
import app from '../../bin';

describe('Health status - [TESTS INTEGRATION]', () => {
  it('Should make a request to health-status route and receive 200', async () => {
    return app
      .inject({
        method: 'GET',
        url: '/api/health-status',
      })
      .then(result => result.statusCode.should.be.equal(200));
  });
});
