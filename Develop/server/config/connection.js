// const mongoose = require('mongoose');

// const uri = 'mongodb+srv://ryanhood10:Vandy10%21@cluster0.1n0vkva.mongodb.net/BookDB.book?retryWrites=true&w=majority';

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://ryanhood10:Vandy30!@cluster0.1n0vkva.mongodb.net/BookDB?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const collection = client.db("BookDB").collection("bookData");
    // perform actions on the collection object
  } catch (err) {
    console.log('Failed to connect to MongoDB Atlas:', err);
  }
}

module.exports = connect;

