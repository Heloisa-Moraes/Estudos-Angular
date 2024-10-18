import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

   remove(animals: Animal[], animal: Animal): Animal []{
      return animals.filter(a => a !== animal);
  }
}
