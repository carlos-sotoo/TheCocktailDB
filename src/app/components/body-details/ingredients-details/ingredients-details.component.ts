import { Component, Input, OnInit } from '@angular/core';
import { DetailsObj } from 'src/app/models/detailsobj.model';
import { CardObj } from 'src/app/models/cardobj.model';

@Component({
  selector: 'app-ingredients-details',
  templateUrl: './ingredients-details.component.html',
  styleUrls: ['./ingredients-details.component.css']
})
export class IngredientsDetailsComponent implements OnInit{
  @Input() recipe: DetailsObj | null = null;
  ingredients: CardObj[] = []
  private ingredientsImg = 'https://www.thecocktaildb.com/images/ingredients/'

  ngOnInit() {
    if (this.recipe?.strIngredient1) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient1, this.ingredientsImg+this.recipe.strIngredient1+'-Medium.png'))
    }
    if (this.recipe?.strIngredient2) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient2, this.ingredientsImg+this.recipe.strIngredient2+'-Medium.png'))
    }
    if (this.recipe?.strIngredient3) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient3, this.ingredientsImg+this.recipe.strIngredient3+'-Medium.png'))
    }
    if (this.recipe?.strIngredient4) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient4, this.ingredientsImg+this.recipe.strIngredient4+'-Medium.png'))
    }
    if (this.recipe?.strIngredient5) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient5, this.ingredientsImg+this.recipe.strIngredient5+'-Medium.png'))
    }
    if (this.recipe?.strIngredient6) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient6, this.ingredientsImg+this.recipe.strIngredient6+'-Medium.png'))
    }
    if (this.recipe?.strIngredient7) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient7, this.ingredientsImg+this.recipe.strIngredient7+'-Medium.png'))
    }
    if (this.recipe?.strIngredient8) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient8, this.ingredientsImg+this.recipe.strIngredient8+'-Medium.png'))
    }
    if (this.recipe?.strIngredient9) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient9, this.ingredientsImg+this.recipe.strIngredient9+'-Medium.png'))
    }
    if (this.recipe?.strIngredient10) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient10, this.ingredientsImg+this.recipe.strIngredient10+'-Medium.png'))
    }
    if (this.recipe?.strIngredient11) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient11, this.ingredientsImg+this.recipe.strIngredient11+'-Medium.png'))
    }
    if (this.recipe?.strIngredient12) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient12, this.ingredientsImg+this.recipe.strIngredient12+'-Medium.png'))
    }
    if (this.recipe?.strIngredient13) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient13, this.ingredientsImg+this.recipe.strIngredient13+'-Medium.png'))
    }
    if (this.recipe?.strIngredient14) {
      this.ingredients.push(new CardObj('',this.recipe.strIngredient14, this.ingredientsImg+this.recipe.strIngredient14+'-Medium.png'))
    }
  }
}
