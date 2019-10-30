import * as fs from 'fs';
import * as path from 'path';
import * as fastify from 'fastify';
import usersRoutes from './modules/users/users-routes';

// Require the framework and instantiate it
const server = fastify({
  logger: true,
});

server.register(require('fastify-formbody'));

server.register(usersRoutes, {
  prefix: '/api',
});

// Declare a route
server.get('/api/health-status', (request, reply) => {
  reply.send();
});

export default server;
