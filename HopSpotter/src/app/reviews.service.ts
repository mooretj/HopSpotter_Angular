import { Injectable } from '@angular/core';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  protected reviews: Review[] = [
    {
      reviewId: 1,
      beerId: 999,
      username: "user1",
      title: "Pretty Good",
      body: "lorem ipsum yadda yadda",
      rating: 3
    },
    {
      reviewId: 2,
      beerId: 999,
      title: "Pretty Good",
      username: "user1",
      body: "lorem ipsum yadda yadda",
      rating: 2
    },
    {
      reviewId: 3,
      beerId: 999,
      title: "Pretty Good",
      username: "user1",
      body: "lorem ipsum yadda yadda",
      rating: 1
    },
    {
      reviewId: 4,
      beerId: 999,
      username: "user1",
      title: "Pretty Good",
      body: "lorem ipsum yadda yadda",
      rating: 5
    },
    {
      reviewId: 5,
      beerId: 998,
      username: "user1",
      title: "Pretty Good",
      body: "lorem ipsum yadda yadda",
      rating: 4
    },
    {
      reviewId: 6,
      beerId: 998,
      username: "user1",
      title: "Pretty Good",
      body: "lorem ipsum yadda yadda",
      rating: 3
    },
    {
      reviewId: 7,
      beerId: 998,
      username: "user1",
      title: "Pretty Good",
      body: "lorem ipsum yadda yadda",
      rating: 1
    },
    {
      reviewId: 8,
      beerId: 997,
      username: "user1",
      title: "Pretty Good",
      body: "lorem ipsum yadda yadda",
      rating: 3
    },
    {
      reviewId: 9,
      beerId: 997,
      username: "user1",
      title: "Pretty Good",
      body: "lorem ipsum yadda yadda",
      rating: 5
    }
  ]

  getReviewsByBeerId(beerId: number) {
    return (this.reviews.filter(
      (review) => review?.beerId === beerId))
  }

  constructor() { }
}
