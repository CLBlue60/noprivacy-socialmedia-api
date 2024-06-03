// Import the `Schema` and `Types` modules from the `mongoose` library
const { Schema, Types } = require("mongoose");

// Define the schema for reactions
const reactionSchema = new Schema(
  {
    // Define a field for the reaction ID
    reactionId: {
      type: Schema.Types.ObjectId, // The type is ObjectId
      default: () => new Types.ObjectId(), // Default value is a new ObjectId
    },
    // Define a field for the reaction body
    reactionBody: {
      type: String, // The type is String
      required: true, // This field is required
      maxlength: 280, // Maximum length of 280 characters
    },
    // Define a field for the username
    username: {
      type: String, // The type is String
      required: true, // This field is required
    },
    // Define a field for the creation date
    createdAt: {
      type: Date, // The type is Date
      default: Date.now, // Default value is the current date and time
    },
  },
  {
    // Specify options for the schema
    toJSON: {
      getters: true, // Enable getters when converting to JSON
    },
  }
);

// Export the reaction schema for use in other modules
module.exports = reactionSchema;
