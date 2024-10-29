const {
  Appointment,
  handleAppointmentValidation,
} = require("../../models/home/appointment");
const upload = require("../../routes/image_uploader");
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
//get appointments
router.get("/", async (req, res) => {
  const appointment = await Appointment.find().sort("name");
  res.send(appointment);
});
/**************************************************************************************************/
//adding appointment:
router.post("/", upload.single("backgroundImg"), async (req, res) => {
  const { error } = handleAppointmentValidation(req.body);
  if (error) {
    // Map through all error details and extract messages
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages); // Send all error messages
  }

  // check if the file was uploaded
  if (!req.file) {
    res.status(400).send("Background img is required..");
  }

  let appointment = new Appointment({
    name: req.body.name,
    department: req.body.department,
    phoneNumber: req.body.phoneNumber,
    datePicker: req.body.datePicker,
    backgroundImg: req.file.path,
  });

  try {
    appointment = await appointment.save();
    res.status(201).send(appointment); // Send the created appointment object with status 201
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

/**************************************************************************************************/
//updating appointment:
router.put("/:id", upload.single("backgroundImg"), async (req, res) => {
  // validate appointment
  const { error } = handleAppointmentValidation(req.body);
  if (error) {
    // Map through all error details and extract messages
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages); // Send all error messages
  }

  let appointment = await Appointment.findById(req.params.id);
  if (!appointment)
    return res.status(404).send("the selected appointment is not found");

  const updatedData = {
    name: req.body.name,
    department: req.body.department,
    phoneNumber: req.body.phoneNumber,
    datePicker: req.body.datePicker,
  };
  if (req.file) {
    updatedData.backgroundImg = req.file.path;
  }

  appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    updatedData,
    {
      new: true,
    }
  );
  // Send the updated appointment as the response
  res.status(200).send(appointment);
});
/**************************************************************************************************/
router.delete("/:id", async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);
  // If the hero data does not exist, return 404
  if (!appointment) {
    return res.status(404).send("Appointment is not available");
  }
  // Return the deleted hero data
  res.status(200).send(appointment);
});

module.exports = router;
