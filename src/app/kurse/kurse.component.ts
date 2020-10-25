import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish'

@Component({
  selector: 'app-kurse',
  templateUrl: './kurse.component.html',
  styleUrls: ['./kurse.component.css']
})
export class KurseComponent implements OnInit { 

  dishes : Dish[] = [
    {
      id: '0',
      name: 'Sprechen-komision',
      image: '/assets/images/sprechen-komision.jpg',
      // tslint:disable-next-line:max-line-length
      description: 'Als Verein Verfolgt Sprachkommission produzieren wir seit Anfang 2019 Projekte und setzen das Sprachenlernen systematisch um.'
    },
    {
      id: '1',
      name: 'Kurs',
      image: '/assets/images/kurs.jpg',
      description: 'Wir helfen derzeit unseren Freunden, die es brauchen, ihre Sprache effektiv und ergebnisorientiert zu lernen.'
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
