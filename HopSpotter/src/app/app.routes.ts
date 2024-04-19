import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { RegisterComponent } from './register/register.component';

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
    path: 'breweries/:breweryId',
    component: BreweriesComponent,
  },
  {
    path: 'beers/:beerId',
    component: BeerDetailsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
];
