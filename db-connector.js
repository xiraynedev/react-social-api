const fastifyPlugin = require('fastify-plugin');
const dotenv = require('dotenv').config();

async function dbConnector(fastify, options) {
  fastify.register(require('fastify-mongodb'), {
    url: `${process.env.MONGO_URL}`,
  });
}

module.exports = fastifyPlugin(dbConnector);
