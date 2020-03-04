import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITransaction } from '../history/history.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url:string = "assets/results.json";

  constructor(private http: HttpClient) { }

  public getTransactions(): Observable<ITransaction>{
    return this.http.get<ITransaction>(this.url);
  }
}