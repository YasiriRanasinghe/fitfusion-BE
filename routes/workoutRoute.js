const {
  getWorkout,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const router = require("express").Router();

router.get("/", getWorkout);
router.get("/:id", getWorkoutById);
router.post("/", createWorkout);
router.put("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;


