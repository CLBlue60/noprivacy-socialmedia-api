// Import the Express router
const router = require("express").Router();

// Import the controller functions for handling thoughts
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers");

// Route definitions with corresponding controller functions

// Route: /api/thoughts
router
  .route("/")
  .get(getThoughts) // GET request: Get all thoughts
  .post(createThought); // POST request: Create a new thought

// Route: /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought) // GET request: Get a single thought by ID
  .put(updateThought) // PUT request: Update a thought by ID
  .delete(deleteThought); // DELETE request: Delete a thought by ID

// Route: /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction); // POST request: Add a reaction to a thought by ID

// Route: /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction); // DELETE request: Delete a reaction from a thought by ID

// Export the router to be used in other parts of the application
module.exports = router;
