const mongoose = require('mongoose');

const uri =
  'mongodb+srv://mccullersghameerah:othsSAhy1tgQPsuJ@mernflashcard.1hmwyu8.mongodb.net/?retryWrites=true&w=majority';

// connect to the database
// Async function because we are making an API call
const connectDB = async () => {
  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
