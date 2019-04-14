import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti with Roasted Cherry',
      'Spaghetti with Roasted Cherry',
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/4/0/WU1504H_lighter-asian-noodle-salad_s4x3.jpg.rend.hgtvcom.826.620.suffix/1480899697405.jpeg",
      [new Ingredient('apple', '10'),
      new Ingredient('apple1', '103')]),
    new Recipe(
      'Pineapple Shrimp Fajitas',
      'Pineapple Shrimp Fajitas',
      "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chicken_pasta_bake_25701_16x9.jpg",
      [new Ingredient('apple2', '10'),
      new Ingredient('apple3', '103')]),
    new Recipe(
      'Roasted Carrots Recipe',
      'Roasted Carrots Recipe',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a09_roasted_carrots.jpg.rend.hgtvcom.826.620.suffix/1393645736360.jpeg',
      [new Ingredient('apple', '10'),
      new Ingredient('apple1', '103')]
    ),
    new Recipe(
      'Roasted Carrots Recipe',
      'Roasted Carrots Recipe', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a09_roasted_carrots.jpg.rend.hgtvcom.826.620.suffix/1393645736360.jpeg',
      [new Ingredient('apple3', '10'),
      new Ingredient('apple14', '103')]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppinhList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}