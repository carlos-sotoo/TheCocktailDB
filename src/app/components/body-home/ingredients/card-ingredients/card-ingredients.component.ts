import { Component, Input } from '@angular/core';
import { CardObj } from 'src/app/models/cardobj.model';

@Component({
  selector: 'app-card-ingredients',
  templateUrl: './card-ingredients.component.html',
  styleUrls: ['./card-ingredients.component.css']
})
export class CardIngredientsComponent {
@Input() drinks: CardObj[]=[];
}
