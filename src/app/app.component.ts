import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlebarComponent } from './Components/titlebar/titlebar.component';
import { CardComponent } from './Components/card/card.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { EmailService } from './Services/email.service';
import { HttpService } from './Services/http.service';
import { ContactData } from './Models/contact-data';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ButtonModule, TitlebarComponent, CardComponent, FooterComponent],
  providers: [EmailService, HttpService, ToastrService ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  submittingFormData: boolean = false;
  isSubmitted: boolean = false;
  fullname: string = "";
  emailAddress: string = "";
  contactMessage: string = "";

  at: string = "@";
  contactPage: boolean = true;
  cards = [
    { icon: "bi-watch", header: "TIME CARE", text: "Time is money, and therefore at Dream To Life we make sure to use time wisely, saving you, and saving us."},
    { icon: "bi-arrows-angle-contract", header: "ADAPTABILITY", text: "Sometimes solutions are simple, sometimes they are complex. Regardless, we adapt to what your business needs"},
    { icon: "bi-chat", header: "COLLABORATION", text: "We strongly believe in clear, consistent communication to bring your dream to life, as you imagine it." },
  ]

  constructor(private _emailService: EmailService, private toastr: ToastrService) {

  }

  public async ChangeContactsPage() {
    this.contactPage = !this.contactPage;
  }

  public async SendEmail() {
    this.submittingFormData = true;
    if (this.fullname.length > 0 && this.emailAddress.length > 0 && this.contactMessage.length > 0) {
      let submissionData: ContactData = {
        Fullname: this.fullname,
        Email: this.emailAddress,
        Message: this.contactMessage
      }
      let result = await this._emailService.SendContactEmail(submissionData);
      if (result === "Success") {
        this.toastr.success('Message Sent!', '', {
          timeOut: 3000,
        });
        this.submittingFormData = false;
        this.isSubmitted = true;
        await this.ClearForm();
      }
      else {
        if (result === "Validation Error") {
          this.toastr.error('Please ensure the email field is an email!', 'Failed', {
            timeOut: 3000,
          });
          this.submittingFormData = false;
        }
        else {
          this.toastr.error('Please try again!', 'Failed', {
            timeOut: 3000,
          });
          this.submittingFormData = false;
          this.ClearForm();
        }
      }
    }
    else {
      this.toastr.info('Please fill all fields', '', {
        timeOut: 3000,
      });
      this.submittingFormData = false;
    }
  }

  private async ClearForm(): Promise<void> {
    this.fullname = "";
    this.emailAddress = "";
    this.contactMessage = "";
  }
}
