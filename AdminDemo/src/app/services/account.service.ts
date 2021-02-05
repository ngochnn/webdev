import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account, Item, } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  insertAccount(acc:Account): Observable<Account> {
    return this.http.post<Account>('http://localhost:8000/api/insert', acc)
  }

//   insertItem(item:ItemDescription): Observable<ItemDescription> {
//     return this.http.post<ItemDescription>('http://localhost:8000/api/insertitem', item);
// }

}
