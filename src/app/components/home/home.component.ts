import { Component } from '@angular/core';
import {FilterComponent} from './filter/filter.component';
import {CarsComponent} from './cars/cars.component';

@Component({
  selector: 'app-home',
  imports: [
    FilterComponent,
    CarsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
