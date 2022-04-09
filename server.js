const fastify = require('fastify')({ logger: true });
const helmet = require('fastify-helmet');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const morgan = require('morgan');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err));


fastify.register(require('./routes/allroutes'));

fastify.listen(8000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
