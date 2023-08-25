import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { QuickSearchComponent } from './components/header/quick-search/quick-search.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BannerComponent } from './components/body-home/banner/banner.component';
import { CardRightComponent } from './components/body-home/banner/card-right/card-right.component';
import { DrinksComponent } from './components/body-home/drinks/drinks.component';
import { CardDrinkComponent } from './components/body-home/drinks/card-drink/card-drink.component';
import { IngredientsComponent } from './components/body-home/ingredients/ingredients.component';
import { CardIngredientsComponent } from './components/body-home/ingredients/card-ingredients/card-ingredients.component';

const routes: Routes = [
  { path: 'menu', component: AppComponent },
  { path: 'rewards', component: AppComponent },
  { path: 'blog', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    QuickSearchComponent,
    BodyHomeComponent,
    BannerComponent,
    CardRightComponent,
    DrinksComponent,
    CardDrinkComponent,
    IngredientsComponent,
    CardIngredientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
