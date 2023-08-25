import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardObj } from '../models/cardobj.model';
import { DetailsObj } from '../models/detailsobj.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'https://www.thecocktaildb.com/api/json/v1/1/';
  private ingredientsImg = 'https://www.thecocktaildb.com/images/ingredients/'
  private query: string = ""

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

  public getDrinksIngredient(ingredient: string | null): Observable<CardObj[]>{
    this.query = ingredient && ingredient.length > 1 ? 'filter.php?i=' + ingredient : 'search.php?f=' + ingredient;
    console.log(this.urlApi+this.query)
   return this.http.get<any>(this.urlApi+this.query).pipe(
      map((response: any) =>
        response.drinks.map((drink: any) => new CardObj(drink.idDrink, drink.strDrink, drink.strDrinkThumb))
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

  public getDetails(id: string|null): Observable<DetailsObj> {
    return this.http.get<DetailsObj>(this.urlApi + 'lookup.php?i=' + id).pipe(
      map((res: any) => res.drinks[0])
    )
}
}
