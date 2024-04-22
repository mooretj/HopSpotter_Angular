import { Component, inject } from '@angular/core';
import { BeerListComponent } from '../beer-list/beer-list.component';
import { ActivatedRoute } from '@angular/router';
import { Brewery } from '../brewery';
import { BreweriesService } from '../breweries.service';

@Component({
  selector: 'app-brewery-details',
  standalone: true,
  imports: [BeerListComponent],
  templateUrl: './brewery-details.component.html',
  styleUrl: './brewery-details.component.scss'
})
export class BreweryDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  brewery: Brewery | undefined;
  breweriesService: BreweriesService = inject(BreweriesService)

  constructor() {
    const breweryId = +this.route.snapshot.params["breweryId"]
    this.brewery = this.breweriesService.getBreweryById(breweryId);
  }


}
