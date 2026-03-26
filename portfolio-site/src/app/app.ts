import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carousel } from './carousel/carousel';
import { Home } from './home/home';
import { Header } from './header/header';
import { Projects } from './projects/projects';
import { Starfield } from './starfield/starfield';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Starfield],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-site');
}
