import { Component, inject } from '@angular/core';
import { BreweriesComponent } from '../breweries/breweries.component';
import { ActivatedRoute } from '@angular/router';
import { Brewery } from '../brewery';

@Component({
  selector: 'app-brewery-details',
  standalone: true,
  imports: [],
  templateUrl: './brewery-details.component.html',
  styleUrl: './brewery-details.component.scss'
})
export class BreweryDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  breweryId = -1;
  brewery: Brewery | undefined;

  constructor() {
    const breweryid = this.route.snapshot.params["breweryId"]
  }

}
