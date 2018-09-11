import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameCase = 'Angular Pipes';
  nameTitle = 'Welcome to angular pipes project',
  nameSlice = 'AngularPipe'
  cities = {
    city: 'Jaipur',
    country: 'India'
  }
  date = new Date();
}
