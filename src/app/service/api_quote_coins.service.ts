import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotesCoins {
  static getApi() {
    throw new Error('Method not implemented.');
  }

  apiUrl: string;

  constructor(
    private httpRequest: HttpClient,
  ) {
    this.apiUrl = "http://127.0.0.1:8000";
  }

  getApi() {
    return this.httpRequest.get<any>(
      `https://queotes-api.herokuapp.com/`,
    ).pipe(map(res => res), map((res: any) => {
      return res;
    }))
  }
}