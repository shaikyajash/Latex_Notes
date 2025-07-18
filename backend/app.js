const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");
const { connectDB } = require("./utils/ConnectToDb");

const notesRoutes = require("./routes/notes");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.json({
    msg: "This is test route",
  });
});

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
