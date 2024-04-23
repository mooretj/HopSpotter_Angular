import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { Review } from '../review';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss',
})
export class ReviewListComponent implements OnInit {
  reviews: Review[] | undefined;

  constructor(
    private reviewsService: ReviewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const beerId = +this.route.snapshot.params["beerId"];
    this.reviews = this.reviewsService.getReviewsByBeerId(beerId);
  }

  getRatingArray(rating: number): any[] {
    return Array(rating).fill(0);
  }
}
