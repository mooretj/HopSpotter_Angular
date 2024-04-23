import { Component } from '@angular/core';
import { Brewery } from '../brewery';
import { BreweriesService } from '../breweries.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brewery-details-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brewery-details-card.component.html',
  styleUrl: './brewery-details-card.component.scss'
})
export class BreweryDetailsCardComponent {

  brewery: Brewery | undefined

  constructor(private breweriesService: BreweriesService) {}

  onInit() {
    this.brewery = this.breweriesService.getBreweryById(777)
  }

}
