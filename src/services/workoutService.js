// In src/services/workoutServices.js
const { v4: uuid } = require("uuid");
const Workouts = require("../database/Workout");

const getAllWorkouts = () => {
    const allWorkouts = Workouts.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = (workoutId) => {
    const workout = Workouts.getOneWorkout(workoutId);
    return workout;
};

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    const createdWorkout = Workouts.createNewWorkout(workoutToInsert);
    return createdWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = Workouts.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
    Workouts.deleteOneWorkout(workoutId);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};