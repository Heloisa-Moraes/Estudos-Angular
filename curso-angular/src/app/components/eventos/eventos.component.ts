import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  show: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  
  showMessage(): void {
    this.show = !this.show; //toggle
  }

}
