// Import the Express router
const router = require("express").Router();

// Import the controller functions for handling users
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userControllers");

// Route definitions with corresponding controller functions

// Route: /api/users
router
  .route("/")
  .get(getUsers) // GET request: Get all users
  .post(createUser); // POST request: Create a new user

// Route: /api/users/:userId
router
  .route("/:userId")
  .get(getSingleUser) // GET request: Get a single user by ID
  .put(updateUser) // PUT request: Update a user by ID
  .delete(deleteUser); // DELETE request: Delete a user by ID

// Route: /api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(addFriend) // POST request: Add a friend to a user
  .delete(removeFriend); // DELETE request: Remove a friend from a user

// Export the router to be used in other parts of the application
module.exports = router;
