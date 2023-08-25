import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-right',
  templateUrl: './card-right.component.html',
  styleUrls: ['./card-right.component.css']
})
export class CardRightComponent {
  @Input() cards: { title: string, description: string, icon: string }[] =[];
}
