const User = require('../models/User');

async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    reply.send({
      serverStatus: 'Ready',
    });
  });

  fastify.get('/users', async (request, reply) => {
    return {
      hello: 'users',
    };
  });

  fastify.get('/api/register', async (fastify, options) => {
    const user = await new User({
      username: 'Jane',
      email: 'jane@email.com',
      password: '12345678',
    });

    await user.save();
    return {
      status: 'saved user',
    };
  });
}

module.exports = routes;
