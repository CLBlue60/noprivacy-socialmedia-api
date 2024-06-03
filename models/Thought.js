// Import the `Schema` and `model` modules from the `mongoose` library
const { Schema, model } = require("mongoose");

// Import the reaction schema
const reactionSchema = require("./Reaction");

// Define the schema to create the Thought model
const thoughtSchema = new Schema(
  {
    // Define a field for the thought text
    thoughtText: {
      type: String, // The type is String
      required: true, // This field is required
      max_length: 280, // Maximum length of 280 characters
    },
    // Define a field for the creation date
    createdAt: {
      type: Date, // The type is Date
      default: Date.now, // Default value is the current date and time
    },
    // Define a field for the username
    username: {
      type: String, // The type is String
      required: true, // This field is required
    },
    // Define a field for the reactions using the reaction schema
    reactions: [reactionSchema],
  },
  {
    // Specify options for the schema
    toJSON: {
      getters: true, // Enable getters when converting to JSON
    },
  }
);

// Create the Thought model using the thought schema
const Thought = model("thought", thoughtSchema);

// Export the Thought model for use in other modules
module.exports = Thought;
