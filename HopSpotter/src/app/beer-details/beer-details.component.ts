import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Beer } from '../beer';
import { BeersService } from '../beers.service';
import { ReviewListComponent } from '../review-list/review-list.component';

@Component({
  selector: 'app-beer-details',
  standalone: true,
  imports: [RouterLink, ReviewListComponent],
  templateUrl: './beer-details.component.html',
  styleUrl: './beer-details.component.scss'
})
export class BeerDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute)
  beer: Beer | undefined
  beersService: BeersService = inject(BeersService)

  constructor() {
    const beerId = +this.route.snapshot.params["beerId"];  
    this.beer = this.beersService.getBeerDetails(beerId);
  }

}
