import { Dish } from './dish';

export const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Deutchkurs',
    image: '/assets/images/deutchkurs.jpg',
    // tslint:disable-next-line:max-line-length
    description: '',
    comments: [
      {
        rating: 5,
        comment: "Das ist gut project.",
        author: "Mehmet Dogan",
        date: "2020-08-15T17:57:28.556094Z"
      },
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

  },
  {
    id: '1',
    name: 'Französisch Kurs',
    image: '/assets/images/französischkurs.jpg',
    // tslint:disable-next-line:max-line-length
    description: '',
    comments: [
      {
        rating: 5,
        comment: "Merci pour les cours.",
        author: "Sükrü Ünlü",
        date: "2020-10-16T17:57:28.556094Z"
      },
      
      {
        rating: 5,
        comment: "C'est un bon projet",
        author: "Ali Ögretmen",
        date: "2020-09-22T17:57:28.556094Z"
      },
    ],

  },
  {
    id: '2',
    name: 'Italienischkurs',
    image: '/assets/images/italienischkurs.jpg',
    // tslint:disable-next-line:max-line-length
    description: '',
    comments: [
      {
        rating: 5,
        comment: "Grazie per i corsi.",
        author: "Mehmet Sökmen",
        date: "2020-10-16T17:57:28.556094Z"
      },
      
      {
        rating: 5,
        comment: "È un bel progetto",
        author: "Ahmet Veli",
        date: "2020-09-22T17:57:28.556094Z"
      },
    ],

  },
  {
    id: '3',
    name: 'Türkischkurs',
    image: '/assets/images/türkischkurs.jpg',
    // tslint:disable-next-line:max-line-length
    description: '',
    comments: [
      {
        rating: 5,
        comment: "Tesekkur ederim.",
        author: "Erkam Ilhan",
        date: "2020-10-16T17:57:28.556094Z"
      },
      
      {
        rating: 5,
        comment: "Güzel bir proje",
        author: "Zeynep Ilhan",
        date: "2020-09-22T17:57:28.556094Z"
      },
    ],

  }
]