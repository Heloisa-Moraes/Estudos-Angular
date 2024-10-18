import { Component, Input } from '@angular/core';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent, EmitterComponent, ListRenderComponent],
})
export class AppComponent {
  userName = 'Joaquim';
  userData = {
  email: 'jojo@hotmail.com',
  role: "Admin",
  }

  title = 'curso-angular';
}
