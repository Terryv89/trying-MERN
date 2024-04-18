const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();

// to get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

// post a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create();
  } catch (error) {}

  res.json({ msg: "POST a new workout" });
});

// DELETE
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a  workout" });
});

// UPDATE
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a  workout" });
});

module.exports = router;
