const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const foodRoutes = require("./routes/foodRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/api/foods", foodRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Food API running on Port:${PORT}`);
});
