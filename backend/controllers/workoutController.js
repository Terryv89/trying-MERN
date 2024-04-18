const Workout = require("../models/WorkoutModel");

//get all workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//get single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

// create newWorkout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ msg: "POST a new workout" });
};

// delete workout

// update workout

module.exports = { createWorkout, getAllWorkouts, getWorkout };