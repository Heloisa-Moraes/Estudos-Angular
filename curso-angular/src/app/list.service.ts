import { Injectable } from '@angular/core';
import { Animal } from './Animal';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor() {}

  remove(animals: Animal[], animalToRemove: Animal): Animal[] {
    return animals.filter(animal => animal !== animalToRemove);
  }
}
