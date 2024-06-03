// Import the `Schema` and `model` modules from the `mongoose` library
const { Schema, model } = require("mongoose");

// Import the `validator` library for validating email addresses
const validator = require("validator");

// Define the schema to create the User model
const userSchema = new Schema(
  {
    // Define a field for the username
    username: {
      type: String, // The type is String
      required: true, // This field is required
      trim: true, // Trim whitespace from the input
      unique: true, // Ensure the username is unique
    },
    // Define a field for the email
    email: {
      type: String, // The type is String
      required: true, // This field is required
      validate: {
        // Validate that the email entered is a valid email
        validator: validator.isEmail,
        message: "Please provide a valid email!",
      },
    },
    // Define an array of thought IDs
    thoughts: [
      {
        type: Schema.Types.ObjectId, // The type is ObjectId
        ref: "thought", // Reference the Thought model
      },
    ],
    // Define an array of friend IDs
    friends: [
      {
        type: Schema.Types.ObjectId, // The type is ObjectId
        ref: "user", // Reference the User model
      },
    ],
  },
  {
    // Specify options for the schema
    toJSON: {
      virtuals: true, // Include virtuals when converting to JSON
    },
  }
);

// Create the User model using the user schema
const User = model("user", userSchema);

// Export the User model for use in other modules
module.exports = User;
