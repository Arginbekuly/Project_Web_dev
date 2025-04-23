import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,      // Должен быть только в корневом модуле
    CommonModule,
    FormsModule,
    HttpClientModule,   // Для HTTP-запросов (AuthService)
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]  // Убедитесь, что у вас есть AppComponent
})
export class AppModule { }
