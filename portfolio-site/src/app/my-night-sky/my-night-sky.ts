import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { StarfieldService } from '../services/starfield';

@Component({
  selector: 'app-my-night-sky',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './my-night-sky.html',
  styleUrl: './my-night-sky.css'
})
export class MyNightSky {
  constructor(private router: Router, private starfieldService: StarfieldService) {}
  selectedColor ='multi';
  changeStarColor(color: string) {
    this.selectedColor = color;
    this.starfieldService.changeColor(color);
  }

  exitNightSky() {
    this.router.navigate(['/']);
  }
}
