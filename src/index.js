const express = require("express");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const bodyparce = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", v1WorkoutRouter);
app.use(bodyparce.json());

app.listen(PORT, () => {
    console.log(`api is listenin on port ${PORT}`);
});