const Joi = require("joi");
const mongoose = require("mongoose");

const workingHoursSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
    enum: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
  },
  hours: {
    type: String, // Example: "8:00 am - 10:00 pm"
    required: true,
  },
  backgroundImg: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const WorkingHours = mongoose.model("WorkingHours", workingHoursSchema);
/**************************************************************************************************/
function handleWorkingHoursValidation(workingHours) {
  const schema = Joi.object({
    day: Joi.string()
      .valid(
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      )
      .required(),
    hours: Joi.string()
      .pattern(/^\d{1,2}:\d{2} [ap]m - \d{1,2}:\d{2} [ap]m$/)
      .required(),
  });

  return schema.validate(workingHours);
}

exports.WorkingHours = WorkingHours;
exports.handleWorkingHoursValidation = handleWorkingHoursValidation;
