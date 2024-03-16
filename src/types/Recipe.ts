type Recipe = {
  id: number;
  titre: string;
  description: string;
  tps_preparation: number;
  user_id: number;
  is_active: boolean;
  created?: Date;
  modified?: Date;
  recipe_ingredients: RecipeIngredient[];
  recipe_steps: RecipeStep[];
};
