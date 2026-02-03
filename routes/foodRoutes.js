const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

/**
 * GET all food items
*/
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ message: "Server error",error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json(food);

  } catch (err) {
    res.status(400).json({
      message: "Invalid ID",
      error: err.message
    });
  }
});



/**
 * GET foods by category
 * Status: 200 OK | 400 Bad Request
 */
async function getFoodsByCategory(req, res) {
  try {
  const category = req.params.category.toLowerCase();

  if (!["breakfast", "lunch", "dinner"].includes(category)) {
    return res.status(400).json({ message: "Invalid category" });
  }
 
  const filter = { category };
  
  if (req.params.name) {
    filter.name = req.params.name;
  }


    const foods = await Food.find(filter);
    res.status(200).json(foods);
  
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

// register routes

router.get("/meal/:category", getFoodsByCategory);
router.get("/meal/:category/:name", getFoodsByCategory);
  
/**
 * POST create new food
*/

router.post("/", async (req, res) => {
  try {
    const { name, price, category } = req.body;

    // validation
    if (!name || !price || !category) {
      return res.status(400).json({
        message: "Missing required fields: name, price, category"
      });
    }

    // prevent duplicates
    const exists = await Food.findOne({ name, category });
    if (exists) {
      return res.status(200).json(exists);
    }

    const food = new Food(req.body);
    await food.save();

    res.status(201).json(food);

  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
});

/**
 * PUT update food
 * Status: 200 OK | 404 Not Found
 */
router.put("/:id", async (req, res) => {
  try {
    // check duplicates
    const exists = await Food.findOne({
      name: req.body.name,
      category: req.body.category,
      _id: { $ne: req.params.id }
    });

    if (exists) {
      return res.status(400).json({
        message: "Duplicate food: name and category already exist"
      });
    }

    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json(updatedFood);

  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
});

    

/**
 * DELETE food
 * Status: 200 OK | 404 Not Found
 */
router.delete("/:id", async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({ message: "Food deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
});

/** DEBUG route to force 500 error
*/  
router.get("/crash", (req, res) => {
  throw new Error("Forced Internal Server Error!");
});

module.exports = router;
