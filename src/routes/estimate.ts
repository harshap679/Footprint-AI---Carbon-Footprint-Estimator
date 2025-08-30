import { Router } from "express";
import { getIngredientsFromDish } from "../services/llmService";
import { calculateCarbon } from "../services/carbonService";

const router = Router();

router.post("/", (req, res) => {
  const { dish } = req.body;
  if (!dish) return res.status(400).json({ error: "Dish name required" });

  const ingredients = getIngredientsFromDish(dish);
  const result = calculateCarbon(ingredients);

  res.json({
    dish,
    estimated_carbon_kg: result.total,
    ingredients: result.breakdown
  });
});

export default router;
