const fastify = require('fastify')({ logger: true });

module.exports = async function (fastify, options) {
  fastify.register(require('./db-connector'));
  fastify.register(require('./routes/allroutes'));
};
