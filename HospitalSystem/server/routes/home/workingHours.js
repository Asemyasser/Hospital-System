const {
  WorkingHours,
  handleWorkingHoursValidation,
} = require("../../models/home/workingHours");
const upload = require("../image_uploader");
const express = require("express");
const router = express.Router();

// GET all working hours
router.get("/", async (req, res) => {
  try {
    const workingHours = await WorkingHours.find().sort("day");
    res.send(workingHours);
  } catch (error) {
    res.status(500).send("An error occurred while retrieving working hours");
  }
});

/**************************************************************************************************/

// ADD new working hours
router.post("/", upload.single("backgroundImg"), async (req, res) => {
  const { error } = handleWorkingHoursValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }

  // check if the file was uploaded
  if (!req.file) {
    res.status(400).send("Background img is required..");
  }

  let workingHours = new WorkingHours({
    day: req.body.day,
    hours: req.body.hours,
    backgroundImg: req.file.path,
  });

  try {
    workingHours = await workingHours.save();
    res.status(201).send(workingHours);
  } catch (error) {
    res.status(500).send("An error occurred while saving working hours");
  }
});

/**************************************************************************************************/

// UPDATE working hours
router.put("/:id", upload.single("backgroundImg"), async (req, res) => {
  const { error } = handleWorkingHoursValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }

  let workingHours = await WorkingHours.findById(req.params.id);
  if (!workingHours)
    return res
      .status(404)
      .send("The selected working hours entry is not found");

  const updatedData = {
    day: req.body.day,
    hours: req.body.hours,
  };
  if (req.file) {
    updatedData.backgroundImg = req.file.path;
  }

  workingHours = await WorkingHours.findByIdAndUpdate(
    req.params.id,
    updatedData,
    {
      new: true,
    }
  );
  // Send the updated workingHours as the response
  res.status(200).send(workingHours);
});

/**************************************************************************************************/

// DELETE working hours
router.delete("/:id", async (req, res) => {
  try {
    const workingHours = await WorkingHours.findByIdAndDelete(req.params.id);
    if (!workingHours) {
      return res.status(404).send("Working hours entry is not available");
    }
    res.status(200).send(workingHours);
  } catch (error) {
    res.status(500).send("An error occurred while deleting working hours");
  }
});

module.exports = router;
