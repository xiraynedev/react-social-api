const fastify = require('fastify')({ logger: true });

module.exports = async function (fastify, options) {
  fastify.get('/', async (request, reply) => {
    reply.send({
      serverStatus: 'Ready',
    });
  });
  fastify.register(require('./db-connector'));
  fastify.register(require('./routes/users'));
};
