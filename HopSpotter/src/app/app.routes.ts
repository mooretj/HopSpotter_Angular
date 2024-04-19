import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { RegisterComponent } from './register/register.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BreweryDetailsComponent } from './brewery-details/brewery-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'HopSpotter',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Log In',
  },
  {
    path: 'logout',
    component: LogoutComponent,
    title: 'Log Out',
  },
  {
    path: 'breweries',
    component: BreweriesComponent,
  },
  {
    path: 'breweries/:breweryId',
    component: BreweryDetailsComponent,
  },
  {
    path: 'breweries/0/beers',
    component: BeerListComponent,
    title: 'All Beers'
  },
  {
    path: 'breweries/:breweryId/beers/:beerId',
    component: BeerDetailsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: 'Whoopsie'
  }
];
