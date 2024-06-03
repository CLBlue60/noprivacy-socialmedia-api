// Import the `connect` and `connection` methods from the `mongoose` library
const { connect, connection } = require("mongoose");

// Define the connection string for the MongoDB database
const connectionString = "mongodb://127.0.0.1:27017/socialmediaDB";

// Connect to the MongoDB database using the connection string
connect(connectionString);

// Export the `connection` object for use in other modules
module.exports = connection;
