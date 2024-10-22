import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { Observable } from 'rxjs';
import { Animal } from './Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'https://api.exemplo.com/animais'; // Definir o URL da API

  constructor(private http: HttpClient) {} // Injetar HttpClient no construtor

  remove(animals: Animal[], animalToRemove: Animal): Animal[] {
    return animals.filter(animal => animal !== animalToRemove);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl); // Fazer requisição GET à API
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`); // Obter um item específico
  }
}
