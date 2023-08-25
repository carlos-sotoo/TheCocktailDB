import { Component,Input } from '@angular/core';
import { CardObj } from 'src/app/models/cardobj.model';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {
  @Input()title: string = "Popular drink";
  @Input()drinks: CardObj[] = []
}
