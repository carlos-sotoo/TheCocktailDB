import { Component, Input } from '@angular/core';
import { CardObj } from 'src/app/models/cardobj.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @Input() title: string = "Popular ingredients";
  @Input() ingredients: CardObj[] = []
}
