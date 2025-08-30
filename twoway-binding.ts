import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-twoway-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './twoway-binding.html',
  styleUrls: ['./twoway-binding.css']
})
export class TwowayBindingComponent {
  studentName: string = '';
}

