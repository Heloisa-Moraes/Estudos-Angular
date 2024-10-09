import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  @Input() name: string = '';  // Permite que o nome seja passado via propriedade de entrada
  @Input() userData!: {email: string, role:string}
}
