import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardObj } from 'src/app/models/cardobj.model';
import { DetailsObj } from 'src/app/models/detailsobj.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-body-ingredients',
  templateUrl: './body-ingredients.component.html',
  styleUrls: ['./body-ingredients.component.css']
})
export class BodyIngredientsComponent implements OnInit {
  drinks: CardObj[] | null = null;
  ingredient: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ingredient = params.get('ingredient');
    });
    this.llenarData()
  }

  llenarData() {
    this.apiService.getDrinksIngredient(this.ingredient).subscribe(data => {
      this.drinks = data
    })
}




  }

