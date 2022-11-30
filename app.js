require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

// Middleware
app.use(express.json()); // parse json bodies in the request object

// routes
app.use("/posts", require("./routes/articlePostRoutes.js"));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, console.log("server is listening on port " + 3000));
  } catch (err) {
    console.error(err);
  }
};

start();
