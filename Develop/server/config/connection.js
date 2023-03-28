// const mongoose = require('mongoose');

// const uri = 'mongodb+srv://ryanhood10:Vandy10%21@cluster0.1n0vkva.mongodb.net/BookDB.book?retryWrites=true&w=majority';

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;
// const { MongoClient } = require('mongodb');
// // running uri at mongo default server 27017  (we are going to use the BookDB database from mongo atlas)
// const uri = 'mongodb://127.0.0.1:27017/BookDB'
// //const uri = 'mongodb+srv://ryanhood10:Vandy30!@cluster0.1n0vkva.mongodb.net/BookDB?retryWrites=true&w=majority';

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function connect() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');

//     const db = client.db('BookDB'); // Use the correct database name
//     const collection = db.collection('bookData'); // Use the correct collection name
//    // Export the collection object so it can be used in your resolvers
//    module.exports = { collection };
// //     const collection = client.db("BookDB").collection("bookData");
//     // perform actions on the collection object
//   } catch (err) {
//     console.log('Failed to connect to MongoDB Atlas:', err);
//   }
// }

// module.exports = connect;

const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/BookDB';

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.log('Failed to connect to MongoDB Atlas:', err);
  }
}

module.exports = connect;
