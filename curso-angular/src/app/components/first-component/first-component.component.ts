import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrls:[ './first-component.component.css']
})
export class FirstComponentComponent {
  name: string = "Heloisa";
  age = 27;
  job = 'programadora';

  constructor() { }

  ngOnInit(): void {

  }

}
