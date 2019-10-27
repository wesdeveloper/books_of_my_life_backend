const fs = require('fs');

const path = require('path');
// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('fastify-formbody'));

// Dinamic routes import
const modulesPath = path.resolve(__dirname, 'modules');
fs.readdirSync(modulesPath).forEach(folder => {
  if (folder !== 'database.js' && folder !== 'helpers.js') {
    fs.readdirSync(path.resolve(modulesPath, folder))
      .filter(file => file.includes('routes'))
      .forEach(fileRouter => {
        // eslint-disable-next-line import/no-dynamic-require
        fastify.register(require(`./modules/${folder}/${fileRouter}`), {
          prefix: '/api',
        });
      });
  }
});

// Declare a route
fastify.get('/api/health-status', (request, reply) => {
  reply.send();
});

module.exports = fastify;
