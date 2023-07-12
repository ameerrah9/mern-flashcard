const express = require('express');
const cors = require('cors');
const logger = require('./utils/logger');
const connectDB = require('./db/connectDB');
const bodyParser = require('body-parser');
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// import routes
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const flashcardRoutes = require('./routes/flashcard');

// Body parser
/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// defining routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/flashcard', flashcardRoutes);

app.use(logger);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
// instead of crashing the server
// for unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = server;
