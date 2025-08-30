import carbonValues from "../data/carbonValues.json";

export function calculateCarbon(ingredients: string[]) {
  let breakdown: any[] = [];
  let total = 0;

  ingredients.forEach((ing) => {
    const carbon = (carbonValues as any)[ing] || 0.5; // default if not found
    breakdown.push({ name: ing, carbon_kg: carbon });
    total += carbon;
  });

  return { total, breakdown };
}
