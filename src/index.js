// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

// Declare a route
fastify.get('/api/health-status', (request, reply) => {
  reply.send();
});

module.exports = fastify;
