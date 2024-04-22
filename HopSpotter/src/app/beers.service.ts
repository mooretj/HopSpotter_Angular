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
      beerName: 'Test Beer1',
      beerDescription: 'Tasty Beer',
      imgUrl: '../../assets/beer4.jpg',
      abv: 5,
      type: 'Pilsner',
    },
    {
      beerId: 998,
      breweryId: 888,
      beerName: 'Test Beer2',
      beerDescription: 'Tasty Beer',
      imgUrl: '../../assets/beer4.jpg',
      abv: 5,
      type: 'Pilsner',
    },
{
      beerId: 999,
      breweryId: 777,
      beerName: 'Test Beer3',
      beerDescription: 'Tasty Beer',
      imgUrl: '../../assets/beer4.jpg',
      abv: 5,
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

  constructor() { }
}
