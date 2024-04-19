import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
})
export class BeerListComponent implements AfterViewInit {
  
  isLoading = true;


  beer1: Beer = {
    beerId: 997,
    breweryId: 888,
    beerName: 'Test Beer1',
    beerDescription: 'Tasty Beer',
    imgUrl: '../../assets/beer4.jpg',
    abv: 5,
    type: 'Pilsner',
  };

  beer2: Beer = {
    beerId: 998,
    breweryId: 888,
    beerName: 'Test Beer2',
    beerDescription: 'Tasty Beer',
    imgUrl: '../../assets/beer4.jpg',
    abv: 5,
    type: 'Pilsner',
  };

  beer3: Beer = {
    beerId: 999,
    breweryId: 888,
    beerName: 'Test Beer3',
    beerDescription: 'Tasty Beer',
    imgUrl: '../../assets/beer4.jpg',
    abv: 5,
    type: 'Pilsner',
  };

  beerList: Beer[] = [this.beer1, this.beer2, this.beer3];

  
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
