import { Component } from '@angular/core';
import { TitlebarComponent } from './Components/titlebar/titlebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitlebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
