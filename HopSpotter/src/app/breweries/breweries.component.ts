import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Brewery } from '../brewery';

@Component({
  selector: 'app-breweries',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breweries.component.html',
  styleUrl: './breweries.component.scss',
})
export class BreweriesComponent {
  brewery1: Brewery = {
    breweryId: 888,
    breweryName: 'Good Brewery',
    breweryMainImg: '../../assets/immigrant.png',
    website: 'https://www.immigrantsonbrewing.com',
    history:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare vitae justo eu consequat. Proin vel quam at risus pretium consequat. Phasellus pulvinar nibh at maximus tincidunt. Integer ac erat ullamcorper nunc dignissim dictum. Suspendisse egestas placerat dui vel pulvinar. Phasellus eget est ex. Fusce sed nunc vitae ipsum vulputate finibus. Sed ac volutpat tortor, ut consequat mi. Ut sed nisl sapien. Nunc dignissim velit lorem, ut egestas nisl consequat in. In vehicula sodales dui, vel condimentum mauris condimentum eu. Aenean a ligula laoreet, viverra nunc ac, varius urna. Suspendisse vitae urna non enim gravida gravida.',
    breweryContact: {
      breweryId: 888,
      email: 'beer@beer.com',
      phone: 1234567890,
      breweryAddress: '123 Beer St. Beertown, OH',
    },
    breweryHours: {
      brewery_id: 888,
      sundayOpen: undefined,
      sundayClose: undefined,
      mondayOpen: undefined,
      mondayClose: undefined,
      tuesdayOpen: undefined,
      tuesdayClose: undefined,
      wednesdayOpen: undefined,
      wednesdayClose: undefined,
      thursdayOpen: undefined,
      thursdayClose: undefined,
      fridayOpen: undefined,
      fridayClose: undefined,
      saturdayOpen: undefined,
      saturdayClose: undefined,
    },
  };
  breweries: Brewery[] = [this.brewery1]
}
