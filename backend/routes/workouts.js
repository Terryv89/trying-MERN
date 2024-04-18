const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// to get all workouts
router.get("/", getAllWorkouts);

// GET single workout
router.get("/:id", getWorkout);

// post a new workout
router.post("/", createWorkout);

// DELETE
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a  workout" });
});

// UPDATE
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a  workout" });
});

module.exports = router;
