import { Component, OnInit } from '@angular/core';
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
export class BeerDetailsCardComponent implements OnInit {

  beer: Beer | undefined
  review: Review | undefined

  constructor(private beersService: BeersService, private reviewsService: ReviewsService) {}

  ngOnInit() {
    const beerArray: number[] = [997, 998, 999]
    const beerNumber: number = this.getRandomBeer(beerArray);
    this.beer = this.beersService.getBeerDetails(beerNumber)
    this.review = this.reviewsService.getIndividualReviewbByBeerId(beerNumber)
  }

  getRatingArray(rating: number): any[] {
    return Array(rating).fill(0);
  }

  getRandomBeer<T>(arr: T[]): T  {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

}
