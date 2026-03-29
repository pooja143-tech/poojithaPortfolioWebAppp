import { Component } from '@angular/core';
import { Home } from '../home/home';
import { Projects } from '../projects/projects';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  mynightsky = true;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
