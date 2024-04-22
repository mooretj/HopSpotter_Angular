import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Beer } from '../beer';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
})
export class BeerListComponent  {

  beerList: Beer[] = [];
  beerService: BeersService = inject(BeersService);
  route: ActivatedRoute = inject(ActivatedRoute)

  constructor() {

    const breweryId = +this.route.snapshot.params["breweryId"];

    console.log(breweryId);

    if(breweryId === 0) {
      this.beerList = this.beerService.getAllBeers();
    }
    else {
    this.beerList = this.beerService.getBeersByBreweryId(breweryId);
    }
  }

}
