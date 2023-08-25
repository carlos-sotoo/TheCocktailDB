import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: { title: string, link: string }[];
  constructor() {
    this.items = [
    { title: 'Menu', link: '/menu' },
    { title: 'Rewards', link: '/rewards' },
    { title: 'Blog', link: '/blog' }
  ]
  }
}
