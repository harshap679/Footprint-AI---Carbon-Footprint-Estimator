export function getIngredientsFromDish(dish: string): string[] {
  const mapping: Record<string, string[]> = {
    "chicken biryani": ["Rice", "Chicken", "Spices", "Oil"],
    "veg curry": ["Vegetables", "Spices", "Oil"],
    "fried rice": ["Rice", "Vegetables", "Oil", "Spices"]
  };

  return mapping[dish.toLowerCase()] || ["Unknown"];
}
