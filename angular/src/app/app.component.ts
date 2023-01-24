import { Component } from '@angular/core';
import { Card } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards: Array<Card> = [
    {
      name: 'Kwik',
      description: 'Kwik is een broertje van Kwek en Kwak',
      showButton: true,
      cardWidth: '18rem',
    },
    {
      name: 'Kwek',
      description: 'Kwek is een broertje van Kwik en Kwak',
      showButton: false,
      cardWidth: '18rem',
    },
    {
      name: 'Kwak',
      description: 'Kwak is een broertje van Kwik en Kwek',
      cardWidth: '12rem',
      showButton: true,
    },
  ];

  pokemon: Array<Card> = [
    {
      name: 'Bulbasaur',
      description: 'Bulbasaur is de eerste pokemon',
      showButton: false,
      cardWidth: '15rem',
    },
    {
      name: 'Ivysaur',
      description: 'Ivysaur is de tweede pokemon',
      showButton: false,
      cardWidth: '15rem',
    },
    {
      name: 'Venusaur',
      description: 'Venusaur is de derde pokemon',
      showButton: false,
      cardWidth: '15rem',
    },
  ];
}
