import { Router } from "express";
import multer from "multer";
import { getIngredientsFromImage } from "../services/visionService";
import { calculateCarbon } from "../services/carbonService";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Image required" });

  const ingredients = getIngredientsFromImage(req.file.path);
  const result = calculateCarbon(ingredients);

  res.json({
    dish: "Detected Dish",
    estimated_carbon_kg: result.total,
    ingredients: result.breakdown
  });
});

export default router;
