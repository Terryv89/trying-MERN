require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

//express app
const app = express();

//middleware setting up a log of what is getting called from the backend
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes request - response
app.use("/api/workouts", workoutRoutes);

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // liste for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to DB, listening on port: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
