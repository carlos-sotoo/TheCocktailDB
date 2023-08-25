import { Component, OnInit } from '@angular/core';
import { CardObj } from 'src/app/models/cardobj.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.css']
})
export class BodyHomeComponent {
  alcoholicDrinks: CardObj[]=[]
  titleAlcoholic :string = "Popular Alcoholic Drinks"
  noAlcoholicDrinks: CardObj[]=[]
  titleNoAlcoholic :string = "Popular No Alcoholic Drinks"
  ingredients: CardObj[]=[]
  titleIngredients :string = "Popular Ingredients"

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void{
    this.llenarData()
  }

  llenarData() {
    this.apiService.getAlcoholicDrinks().subscribe(data => {
      this.alcoholicDrinks = data
    })

    this.apiService.getNoAlcoholicDrinks().subscribe(data => {
      this.noAlcoholicDrinks = data
    })

    this.apiService.getIngredients().subscribe(data => {
      this.ingredients = data
    })

  }
}
