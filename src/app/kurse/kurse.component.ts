import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-kurse',
  templateUrl: './kurse.component.html',
  styleUrls: ['./kurse.component.css']
})
export class KurseComponent implements OnInit { 

  dishes: Dish[] = DISHES;

  selectedDish: Dish; 

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
