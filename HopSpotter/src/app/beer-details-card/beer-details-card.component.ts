import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Beer } from '../beer';
import { Review } from '../review';
import { BeersService } from '../beers.service';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-beer-details-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './beer-details-card.component.html',
  styleUrl: './beer-details-card.component.scss'
})
export class BeerDetailsCardComponent {

  beer: Beer | undefined
  review: Review | undefined

  constructor(private beersService: BeersService, private reviewsService: ReviewsService) {}

  onInit() {
    this.beer = this.beersService.getBeerDetails(999)
    this.review = this.reviewsService.getIndividualReviewbByBeerId(999)
  }

}
