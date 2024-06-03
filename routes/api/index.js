// Import the Express router
const router = require("express").Router();

// Import the user routes from the 'userRoutes' file
const userRoutes = require("./userRoutes");

// Import the thought routes from the 'thoughtRoutes' file
const thoughtRoutes = require("./thoughtRoutes");

// Use the user routes for any requests starting with '/users'
router.use("/users", userRoutes);

// Use the thought routes for any requests starting with '/thoughts'
router.use("/thoughts", thoughtRoutes);

// Export the router to be used in other parts of the application
module.exports = router;
