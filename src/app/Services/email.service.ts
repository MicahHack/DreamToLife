import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ContactData } from '../Models/contact-data';
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private _httpService: HttpService) { }

  public async SendContactEmail(data: ContactData): Promise<string> {
    let newMessage = "My name is: " + data.Fullname + "\n\n" + "My Message is; " + "\n" + data.Message;
    let submissionData = {
      email: data.Email,
      message: newMessage
    }
    let result = await firstValueFrom(this._httpService.apiPost("https://formspree.io/f/mrbzoodw", submissionData)).catch((error) => {
      if (error.error.errors[0].message.includes("email")) {
        return "Validation Error";
      }
      else {
        return "Unknown Error";
      }
    });
    if (result.status === 200) {
      return "Success";
    }
    else {
      return "Failed";
    }
  }
}
