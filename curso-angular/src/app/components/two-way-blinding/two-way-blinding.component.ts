import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-blinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-blinding.component.html',
  styleUrls: ['./two-way-blinding.component.css'],
})
export class TwoWayBlindingComponent {
name: String = '';


 constructor(){}

 ngOnInit(): void {

 }

}
