// server/models/home/validation.js

const Joi = require("joi");

// Define the schema for hero validation
const heroSchema = Joi.object({
  header: Joi.string().min(3).required(),
  desc: Joi.string().min(10).required(),
  coloredDesc: Joi.string().allow("", null),
  // Add other fields as necessary
});

// Function to validate hero data
const handleHeroValidation = (data) => {
  return heroSchema.validate(data);
};

module.exports = {
  handleHeroValidation,
};
