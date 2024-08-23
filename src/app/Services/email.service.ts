import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ContactData } from '../Models/contact-data';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url = 
  constructor(private _httpService: HttpService) { }

  public async SendContactEmail(data: ContactData) {
    this._httpService.apiPost("", data).subscribe((result) => {
      return result;
    });
  }
}
