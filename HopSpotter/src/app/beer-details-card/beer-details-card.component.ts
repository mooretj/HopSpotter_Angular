import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-beer-details-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './beer-details-card.component.html',
  styleUrl: './beer-details-card.component.scss'
})
export class BeerDetailsCardComponent {

}
