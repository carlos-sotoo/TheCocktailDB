import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardObj } from '../models/cardobj.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'https://www.thecocktaildb.com/api/json/v1/1/';
  private ingredientsImg = 'https://www.thecocktaildb.com/images/ingredients/'

  constructor(private http: HttpClient) { }

  public getAlcoholicDrinks(): Observable<CardObj[]>{
   return this.http.get<any>(this.urlApi+'filter.php?a=Alcoholic').pipe(
      map((response: any) =>
        response.drinks.slice(0, 8).map((drink: any) => new CardObj(drink.idDrink, drink.strDrink, drink.strDrinkThumb))
     )
    );
  }

  public getNoAlcoholicDrinks(): Observable<CardObj[]>{
   return this.http.get<any>(this.urlApi+'filter.php?a=Non_Alcoholic').pipe(
      map((response: any) =>
        response.drinks.slice(0, 8).map((drink: any) => new CardObj(drink.idDrink, drink.strDrink, drink.strDrinkThumb))
     )
    );
  }

  public getIngredients(): Observable<CardObj[]>{
   return this.http.get<any>(this.urlApi+'list.php?i=list').pipe(
      map((response: any) =>
        response.drinks.slice(0, 4).map((drink: any) => new CardObj('', drink.strIngredient1, this.ingredientsImg+drink.strIngredient1+'-Medium.png'))
     )
    );
  }
}
