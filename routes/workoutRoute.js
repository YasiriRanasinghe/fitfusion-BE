const {
  getWorkout,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  getWorkoutsByTitle

} = require("../controllers/workoutController");
const router = require("express").Router();

router.get("/", getWorkout);
router.get("/:id", getWorkoutById);
router.post("/", createWorkout);
router.put("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);
router.get("/titles/:title", getWorkoutsByTitle);

module.exports = router;


// http://localhost:5003/api/workouts/titles/GET%20FIT
// http://localhost:5003/api/workouts/titles/BUILD%20MUSCLE
// http://localhost:5003/api/workouts/titles/LOSE%20WEIGHT