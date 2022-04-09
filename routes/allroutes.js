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

  fastify.post('/api/register', async (request, reply) => {
    const newUser = new User({
      username: request.body.username,
      email: request.body.email,
      password: request.body.password,
    });

    try {
      const user = await newUser.save();
      reply.send('Successfully saved user');
    } catch (err) {
      console.log(err);
      return;
    }
  });
}

module.exports = routes;
