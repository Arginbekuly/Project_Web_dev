import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {FilterComponent} from './components/home/filter/filter.component';
import {NgOptimizedImage} from '@angular/common';
import { Car } from './models/car';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, HeaderComponent, FilterComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car_shop';
  cars: Car[] = [];

}
