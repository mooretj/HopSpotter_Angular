import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {

  reviewForm = new FormGroup({
    title: new FormControl('', Validators.required),
    review: new FormControl('', Validators.required),
    rating: new FormControl('Please select a rating', Validators.required)
  })

  addReview() {
    console.log(this.reviewForm)
    this.reviewForm.reset()
  }
}
