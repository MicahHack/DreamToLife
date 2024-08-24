import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  public apiPost<T>(url: string, requestData: any, paramaters: any = {}): Observable<any> {
    return this._http.post<any>(url, requestData, { 
      params: paramaters,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: "response",
      responseType: "json"
    });
  }
}
