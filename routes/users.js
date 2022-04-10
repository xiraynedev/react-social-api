const {
  listUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');

const getUserOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            username: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
          },
        },
      },
    },
  },
  handler: listUsers,
};

async function routes(fastify, options) {
  fastify.get('/users', getUserOptions);
  fastify.post('/users', addUser);
  fastify.get('/users/:id', getUser);
  fastify.put('/users/:id', updateUser);
  fastify.delete('/users/:id', deleteUser);
}

module.exports = routes;
