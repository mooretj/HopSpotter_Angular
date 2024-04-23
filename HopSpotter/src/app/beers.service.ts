import { Injectable } from '@angular/core';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  protected beerList: Beer[] = [
    {
      beerId: 997,
      breweryId: 888,
      beerName: 'Test Beer 1',
      beerDescription: 'Tasty Beer',
      imgUrl: '../../assets/beer4.jpg',
      abv: 5,
      type: 'Pilsner',
    },
    {
      beerId: 998,
      breweryId: 888,
      beerName: 'Test Beer 2',
      beerDescription: 'Yummy Beer',
      imgUrl: '../../assets/beer4.jpg',
      abv: 50,
      type: 'Pilsner',
    },
{
      beerId: 999,
      breweryId: 777,
      beerName: 'Test Beer 3',
      beerDescription: 'Delicious Beer',
      imgUrl: '../../assets/beer4.jpg',
      abv: 500,
      type: 'Pilsner',
    }
  ];


  getAllBeers() {
    return this.beerList;
  }

  getBeersByBreweryId(breweryId: number) {
    return (this.beerList.filter(
      (beer) => beer?.breweryId === breweryId)
    )
  }

  getBeerDetails(beerId: number | undefined) {
    return (this.beerList.find(
      (beer) => beer?.beerId === beerId)
    )
  }

  constructor() { }
}
