import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brewery-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './brewery-form.component.html',
  styleUrl: './brewery-form.component.scss'
})
export class BreweryFormComponent {

  dayDisabledMap: { [key: string]: boolean } = {}

  breweryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    mainImage: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    logo: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required)
  })

  hoursForm = new FormGroup({
    sundayOpen: new FormControl(),
    sundayClose: new FormControl(),
    sundayCheckbox: new FormControl(),
    mondayOpen: new FormControl(),
    mondayClose: new FormControl(),
    mondayCheckbox: new FormControl(),
    tuesdayOpen: new FormControl(),
    tuesdayClose: new FormControl(),
    tuesdayCheckbox: new FormControl(),
    wednesdayOpen: new FormControl(),
    wednesdayClose: new FormControl(),
    wednesdayCheckbox: new FormControl(),
    thursdayOpen: new FormControl(),
    thursdayClose: new FormControl(),
    thursdayCheckbox: new FormControl(),
    fridayOpen: new FormControl(),
    fridayClose: new FormControl(),
    fridayCheckbox: new FormControl(),
    saturdayOpen: new FormControl(),
    saturdayClose: new FormControl(),
    saturdayCheckbox: new FormControl()
  })

  addBrewery() {
    console.log(this.breweryForm.value.name);
    this.breweryForm.reset()
  }

  hoursDisable(day: string) {
    this.dayDisabledMap[day] = ! this.dayDisabledMap[day];
    const openControl = this.hoursForm.get(`${day}Open`);
    const closeControl = this.hoursForm.get(`${day}Close`);

    if(openControl && closeControl) {
      if(this.dayDisabledMap[day]) {
        openControl.disable();
        closeControl.disable();
      }
      else {
        openControl.enable();
        closeControl.enable();
      }
    }
  }
}
