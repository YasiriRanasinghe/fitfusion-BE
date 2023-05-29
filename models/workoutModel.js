const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  workoutName: {
    type: String,
  },
  workoutTime: {
    type: String,
  },
  overview: {
    type: String,
  },
  bodyPart: {
    type: String,
  },
  reps: {
    type: Number,
  },
  titles: {
    type: String,
  },
  posterUrl: {
    type: String,
  },
  videoUlr: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);
