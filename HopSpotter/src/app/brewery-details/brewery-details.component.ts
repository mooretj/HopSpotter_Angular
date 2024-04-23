import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Brewery } from '../brewery';
import { Beer } from '../beer';
import { BreweriesService } from '../breweries.service';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-brewery-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brewery-details.component.html',
  styleUrl: './brewery-details.component.scss'
})
export class BreweryDetailsComponent {

  loggedIn = false;
  route: ActivatedRoute = inject(ActivatedRoute);
  brewery: Brewery | undefined;
  breweriesService: BreweriesService = inject(BreweriesService)
  beersService: BeersService = inject(BeersService)
  beerList: Beer[] = []

  constructor() {
    const breweryId = +this.route.snapshot.params["breweryId"]
    this.brewery = this.breweriesService.getBreweryById(breweryId);

    this.beerList = this.beersService.getBeersByBreweryId(breweryId);
  }


}
