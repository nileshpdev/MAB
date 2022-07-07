import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { Result } from './interface/result';
import { of, tap, map } from 'rxjs';
import { Player } from './player'
import { PLAYERS } from './players';
import { CombinedData } from './interface/combined-data';



@Injectable({
  providedIn: 'root'
})

export class ResultsService {

  players: Player[] = PLAYERS;



  constructor(private http: HttpClient) { }

  getData(): Observable<Result[]> {
    return this.http.get<Result[]>('https://1442fad3-4330-4594-bec7-7a26bc410eb3.mock.pstmn.io/scrabble')
      .pipe(
        map(results => results.map((result, key) => ({
          ...result,
          players: this.players.filter((a: { PlayerId: number; }) => a.PlayerId === result.PlayerId),
        }))),
        map(results => results.sort((a, b) => (a.TotalScore > b.TotalScore) ? 1 : 1)),
        tap(results => console.log("hello :", results)),
      )

      .pipe(catchError(this.erroHandler));
  }
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');

  }
}
