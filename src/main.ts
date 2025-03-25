import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DatepickerComponent } from './app-components/datepicker/datepicker.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'main.component.html',
  imports: [DatepickerComponent]
})
export class App {
  name = 'Angular';
  
}

bootstrapApplication(App);
