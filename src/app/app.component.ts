import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlebarComponent } from './Components/titlebar/titlebar.component';
import { CardComponent } from './Components/card/card.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TitlebarComponent, CardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cards = [
    { icon: "bi-watch", header: "TIME CARE", text: "Time is money, and therefore at Dream To Life we make sure to use time wisely, saving you, and saving us."},
    { icon: "bi-arrows-angle-contract", header: "ADAPTABILITY", text: "Sometimes solutions are simple, sometimes they are complex. Regardless, we adapt to what your business needs"},
    { icon: "bi-chat", header: "COLLABORATION", text: "We strongly believe in clear, consistent communication to bring your dream to life, as you imagine it." },
  ]
}
