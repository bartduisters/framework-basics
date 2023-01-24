import { Component, Input } from '@angular/core';
import { Card } from '../models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() cards: Array<Card> = [];
}
