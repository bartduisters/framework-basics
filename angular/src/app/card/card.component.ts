import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() name = '';
  @Input() description = '';
  @Input() showButton = true;
  @Input() cardWidth = '18rem';

}
