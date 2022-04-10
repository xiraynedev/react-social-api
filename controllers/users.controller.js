const { ObjectId } = require('mongodb');

async function listUsers(req, reply) {
  const users = this.mongo.db.collection('users');
  const result = await users.find({}).toArray();
  reply.send(result);
}

async function addUser(req, reply) {
  const users = this.mongo.db.collection('users');
  const { username, email, password } = req.body;
  const result = await users.insertOne({ username, email, password });
  reply.code(201).send({
    status: 'Successfully added the user',
  });
}

async function getUser(req, reply) {
  const users = this.mongo.db.collection('users');
  const result = await users.findOne({ _id: new ObjectId(req.params.id) });
  if (result) {
    return reply.send(result);
  }
  reply.send({
    status: 'User not found',
  });
}

async function updateUser(req, reply) {
  const users = this.mongo.db.collection('users');
  const { username, email, password } = req.body;
  const result = await users.updateOne(
    {
      _id: ObjectId(req.params.id),
    },
    {
      $set: {
        username,
        email,
        password,
      },
    },
  );
  reply.send({
    status: 'Successfully updated the user',
  });
}

async function deleteUser(req, reply) {
  const users = this.mongo.db.collection('users');
  const result = await users.deleteOne({ _id: ObjectId(req.params.id) });
  if (result.deletedCount) {
    reply.send('Successfully deleted the user');
  }
}

module.exports = {
  listUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
};
