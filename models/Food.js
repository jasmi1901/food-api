const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cuisine: String,
  price: {
    type: Number,
    required: true
  },
  category: { 
    type: String, 
    enum: ["breakfast", "lunch", "dinner"], 
    required: true 
  }
});

foodSchema.index({ name: 1, category: 1 }, { unique: true });

module.exports = mongoose.model("Food", foodSchema);
