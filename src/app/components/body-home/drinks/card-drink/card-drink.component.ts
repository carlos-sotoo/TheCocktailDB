import { Component, Input } from '@angular/core';
import { CardObj } from 'src/app/models/cardobj.model';

@Component({
  selector: 'app-card-drink',
  templateUrl: './card-drink.component.html',
  styleUrls: ['./card-drink.component.css']
})
export class CardDrinkComponent {
  @Input() drinks: CardObj[]=[];
}
