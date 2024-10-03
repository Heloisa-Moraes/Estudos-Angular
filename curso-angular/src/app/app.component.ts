import { Component } from '@angular/core';
import { FirstComponentComponent } from './components/first-component/first-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FirstComponentComponent]
})
export class AppComponent {
  title = 'curso-angular';
}
