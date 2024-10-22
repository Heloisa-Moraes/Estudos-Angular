import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Animal';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal 

  constructor(private ListService: ListService, private route: ActivatedRoute) {
    this.getAnimal()
  }
 
  
  ngOnInit(): void {}


  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.ListService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
