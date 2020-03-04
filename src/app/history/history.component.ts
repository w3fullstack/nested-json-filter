import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ITransaction, Results } from '../history/history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit {
    Results$: Observable<Array<Results>>;
    transactions: Array<Results>;

    constructor(private _apiService: ApiService) { }

    ngOnInit() {
        this.Results$ = this._apiService.getTransactions()
        .pipe(
          map((itransaction: ITransaction) => itransaction.transaction)
        );
        this.Results$.subscribe( data => this.transactions = data);
        console.log(this.Results$)
    }

    filter(transaction: Results): Array<Results> {
      let results: Array<Results> = [];
      
      if (transaction.state === "verified") 
        results.push(transaction);

      while (transaction.presentation !==  null) {
        if (transaction.state === "verified") 
          results.push(transaction);
        transaction = transaction.presentation;
      }

      return results;
    }
  }