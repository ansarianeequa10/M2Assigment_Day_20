import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwowayBindingComponent } from './components/twoway-binding/twoway-binding';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TwowayBindingComponent], // 👈 import add kiya
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'webteam-angular-app';
}

