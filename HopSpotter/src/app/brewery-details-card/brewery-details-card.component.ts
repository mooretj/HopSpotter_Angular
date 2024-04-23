import { Component, OnInit } from '@angular/core';
import { Brewery } from '../brewery';
import { BreweriesService } from '../breweries.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brewery-details-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brewery-details-card.component.html',
  styleUrl: './brewery-details-card.component.scss'
})
export class BreweryDetailsCardComponent implements OnInit {

  brewery: Brewery | undefined

  constructor(private breweriesService: BreweriesService) {}

  ngOnInit() {
    const breweryArray: number[] = [666,777,888]
    const randomBrewery: number = this.getRandomBrewery(breweryArray);
    this.brewery = this.breweriesService.getBreweryById(randomBrewery)
  }

  getRandomBrewery<T>(arr: T[]): T  {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
}
