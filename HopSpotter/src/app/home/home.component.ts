import { Component } from '@angular/core';
import { BreweryDetailsCardComponent } from '../brewery-details-card/brewery-details-card.component';
import { BeerDetailsCardComponent } from '../beer-details-card/beer-details-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BreweryDetailsCardComponent, BeerDetailsCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router){}

  inputRoute() {
    this.router.navigate(['/breweries']);
  }
}
