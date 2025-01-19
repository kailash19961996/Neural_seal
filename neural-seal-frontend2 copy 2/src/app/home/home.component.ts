// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // for [(ngModel)]
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-home',
  template: `
    <h2>Home</h2>
    <p>Welcome to the Neural Seal homepage!</p>

    <div>
      <label>Select Type:</label>
      <select [(ngModel)]="selectedType">
        <option value="product">Product</option>
        <option value="service">Service</option>
        <option value="hybrid">Hybrid</option>
      </select>
    </div>

    <button (click)="goToResult()">Go to Result</button>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedType = 'product';

  constructor(private router: Router) {}

  goToResult() {
    // We could do something with selectedType or store it, etc.
    this.router.navigate(['/result']);
  }
}