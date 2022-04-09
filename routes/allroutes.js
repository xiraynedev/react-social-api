const User = require('../models/User');

async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection('users');

  fastify.get('/', async (request, reply) => {
    reply.send({
      serverStatus: 'Ready',
    });
  });

  fastify.get('/users', async (request, reply) => {
    const result = await collection.find().toArray();
    if (result.length === 0) {
      return {
        error: 'No documents found',
      };
    }

    return result;
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
