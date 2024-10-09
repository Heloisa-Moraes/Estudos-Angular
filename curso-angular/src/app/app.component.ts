import { Component, Input } from '@angular/core';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FirstComponentComponent, ParentDataComponent, DirectivesComponent]
})
export class AppComponent {
  userName = 'Joaquim';
  userData = {
  email: 'jojo@hotmail.com',
  role: "Admin",
  }

  title = 'curso-angular';
}
