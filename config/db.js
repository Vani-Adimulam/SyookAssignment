// const mongoose = require("mongoose");

// // mongoose.connect("mongodb://127.0.0.1:27017/encrypted-timeseries");
// mongoose.connect(process.env.DB_URI);

// const db = mongoose.connection;

// mongoose.connect(uri, options)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });


// module.exports = db;


const mongoose = require('mongoose');

// Define your MongoDB connection URI here
const uri = '"mongodb://127.0.0.1:27017/encrypted-timeseries"';

// Additional configuration options if needed
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to the database
mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
