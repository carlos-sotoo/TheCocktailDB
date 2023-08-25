import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
cards: { title: string, description: string, icon: string }[];
  constructor() {
    this.cards = [
    { title: 'Versatility', description: 'The range of flavors in gin is exceptionally wide, thanks to the variety of botanicals that can be used in its production.', icon:'assets/images/water-solid.png' },
    { title: 'Distiontiv Flavor', description: 'Bittersweet and slightly woody flavor is the signature of any gin.', icon:'assets/images/cocktail-solid.png' },
    { title: 'Purity', description: 'This gives it a clean, pure feel, without the caramel or vanilla notes that come from barrel aging.', icon:'assets/images/water-drops.png' }
  ]
  }
}
