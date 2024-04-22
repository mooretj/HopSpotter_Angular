import { Injectable } from '@angular/core';
import { Brewery } from './brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {

  protected breweriesList: Brewery[] = [
    {
      breweryId: 777,
      breweryName: 'Better Brewery',
      breweryMainImg: '../../assets/immigrant.png',
      website: 'https://www.immigrantsonbrewing.com',
      history:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare vitae justo eu consequat. Proin vel quam at risus pretium consequat. Phasellus pulvinar nibh at maximus tincidunt. Integer ac erat ullamcorper nunc dignissim dictum. Suspendisse egestas placerat dui vel pulvinar. Phasellus eget est ex. Fusce sed nunc vitae ipsum vulputate finibus. Sed ac volutpat tortor, ut consequat mi. Ut sed nisl sapien. Nunc dignissim velit lorem, ut egestas nisl consequat in. In vehicula sodales dui, vel condimentum mauris condimentum eu. Aenean a ligula laoreet, viverra nunc ac, varius urna. Suspendisse vitae urna non enim gravida gravida.',
      breweryContact: {
        breweryId: 777,
        email: 'beer@beer.com',
        phone: 1234567890,
        breweryAddress: '123 Beer St. Beertown, OH',
      },
      breweryHours: {
        brewery_id: 777,
        sundayOpen: '12:00',
        sundayClose: '11:00',
        mondayOpen: '12:00',
        mondayClose: '11:00',
        tuesdayOpen: '12:00',
        tuesdayClose: '11:00',
        wednesdayOpen: '12:00',
        wednesdayClose: '11:00',
        thursdayOpen: '12:00',
        thursdayClose: '11:00',
        fridayOpen: '12:00',
        fridayClose: '11:00',
        saturdayOpen: '12:00',
        saturdayClose: '11:00',
      }
    },
    {
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
      sundayOpen: '12:00',
      sundayClose: '11:00',
      mondayOpen: '12:00',
      mondayClose: '11:00',
      tuesdayOpen: '12:00',
      tuesdayClose: '11:00',
      wednesdayOpen: '12:00',
      wednesdayClose: '11:00',
      thursdayOpen: '12:00',
      thursdayClose: '11:00',
      fridayOpen: '12:00',
      fridayClose: '11:00',
      saturdayOpen: '12:00',
      saturdayClose: '11:00',
    }
    }
  ];

  getAllBreweries(): Brewery[] {
    return this.breweriesList;
  }

  getBreweryById(id: number): Brewery | undefined {
    return this.breweriesList.find((brewery) => brewery.breweryId === id);
  }

  constructor() { }
}
