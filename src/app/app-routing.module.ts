import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyDetailsComponent } from './components/body-details/body-details.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyIngredientsComponent } from './components/body-ingredients/body-ingredients.component';

const routes: Routes = [
  { path: '', component: BodyHomeComponent },
  { path: 'menu', component: BodyHomeComponent },
  { path: 'rewards', component: BodyHomeComponent },
  { path: 'blog', component: BodyHomeComponent },
  { path: 'details/:id', component: BodyDetailsComponent },
  { path: 'ingredient/:ingredient', component: BodyIngredientsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
