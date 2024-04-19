import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-beer-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './beer-details.component.html',
  styleUrl: './beer-details.component.scss'
})
export class BeerDetailsComponent {

}
