import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Animal } from '../../Animal';

import { ListService } from '../../list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})

export class ListRenderComponent implements OnInit {
  animals: Animal []= [
    {name: 'Turca', type: 'Dog', age: 4},
    {name: 'Tom', type: 'Cat', age: 10},
    {name: 'Frida', type: 'Dog',age: 12}, 
    {name: 'Bob', type: 'Horse', age: 1},
  ];

    animalDetails = '';
  
  constructor(private listService: ListService){}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal): void {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals,animal);
  }
}
