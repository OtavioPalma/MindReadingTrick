import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { Card } from "src/app/model/Card";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

const url = "https://deckofcardsapi.com/api/deck";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getNewDeck(): Observable<any> {
    return this.http
      .get<any>(`${url}/new/draw/?count=21`)
      .pipe(catchError(this.handleError<any>("getCards")));
  }

  getPile(id: string): Observable<any> {
    return this.http
      .get<any>(`${url}/${id}/pile/newPile/list/`)
      .pipe(catchError(this.handleError<any>("getCards")));
  }

  createPile(id: string, cards: Card[]): Observable<any> {
    return this.http
      .get<any>(`${url}/${id}/pile/newPile/add/?cards=${cards}`)
      .pipe(catchError(this.handleError<any>("createPile")));
  }

  shufflePile(id: string): Observable<any> {
    return this.http
      .get<any>(`${url}/${id}/pile/newPile/shuffle/`)
      .pipe(catchError(this.handleError<any>("shufflePile")));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
