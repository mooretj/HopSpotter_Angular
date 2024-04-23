import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Brewery } from '../brewery';
import { BreweriesService } from '../breweries.service';

@Component({
  selector: 'app-breweries',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breweries.component.html',
  styleUrl: './breweries.component.scss',
})
export class BreweriesComponent {

  loggedIn = false;
  breweries: Brewery[] = []
  breweriesService: BreweriesService = inject(BreweriesService);

  constructor() {
    this.breweries = this.breweriesService.getAllBreweries();
  }
}
