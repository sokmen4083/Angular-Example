import { Dish } from './dish';

export const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Sprachkommission',
    image: '/assets/images/sprechen-komision.jpg',
    // tslint:disable-next-line:max-line-length
    description: 'Als Verein Verfolgt Sprachkommission produzieren wir seit Anfang 2019 Projekte und setzen das Sprachenlernen systematisch um.',
    comments: [
      {
        rating: 5,
        comment: "Das ist gut project.",
        author: "Mehmet Dogan",
        date: "2020-08-15T17:57:28.556094Z"
      },

    ],

  },
  {
    id: '1',
    name: 'Kurse',
    image: '/assets/images/kurs.jpg',
    // tslint:disable-next-line:max-line-length
    description: 'Als Verein Verfolgt Sprachkommission produzieren wir seit Anfang 2019 Projekte und setzen das Sprachenlernen systematisch um.',
    comments: [
      {
        rating: 5,
        comment: "Vielen Dank für kurse.",
        author: "Mukaddes Sökmen",
        date: "2020-10-16T17:57:28.556094Z"
      },
      
      {
        rating: 5,
        comment: "Danke Schön",
        author: "Ali Ögretmen",
        date: "2020-09-22T17:57:28.556094Z"
      },
    ],

  }
]