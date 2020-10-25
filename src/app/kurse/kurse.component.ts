import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-kurse',
  templateUrl: './kurse.component.html',
  styleUrls: ['./kurse.component.css']
})
export class KurseComponent implements OnInit { 

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }
  
  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }
  
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
