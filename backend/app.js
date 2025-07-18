const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");
const { connectDB } = require("./utils/ConnectToDb");

const notesRoutes = require("./routes/notes");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const allowedOrigins = [
  process.env.FRONTEND_URL,
];

//Enabling cors
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); //  Handles preflight requests


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
