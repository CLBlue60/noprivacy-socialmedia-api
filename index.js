// Import the Express module
const express = require("express");

// Import the database connection configuration
const db = require("./config/connection");

// Import the routes
const routes = require("./routes");

// Define the port the server will listen on, using an environment variable if available, otherwise default to 3001
const PORT = process.env.PORT || 3001;

// Create an instance of an Express application
const app = express();

// Middleware to parse URL-encoded data (useful for form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

// Use the routes defined in the routes module
app.use(routes);

// Start the server only once the database connection is open
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for social media API running on port ${PORT}!`);
  });
});
