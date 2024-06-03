// Import the Express router
const router = require("express").Router();

// Import the API routes from the 'api' directory
const apiRoutes = require("./api");

// Use the API routes for any requests starting with '/api'
router.use("/api", apiRoutes);

// Handle any other routes with a 'Wrong route!' message
router.use((req, res) => res.send("Wrong route!"));

// Export the router to be used in other parts of the application
module.exports = router;
