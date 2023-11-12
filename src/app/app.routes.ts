import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { CarsListComponent } from './cars-list/cars-list.component';

export const routes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'cars', component: CarsListComponent },
];
