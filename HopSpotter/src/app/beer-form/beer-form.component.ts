import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-beer-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './beer-form.component.html',
  styleUrl: './beer-form.component.scss'
})
export class BeerFormComponent {

  beerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    abv: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  addBeer() {
    console.log(this.beerForm.value.name);
    this.beerForm.reset()
  }

}
