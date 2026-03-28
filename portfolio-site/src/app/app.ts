import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Carousel } from './carousel/carousel';
import { Home } from './home/home';
import { Header } from './header/header';
import { Projects } from './projects/projects';
import { Starfield } from './starfield/starfield';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Starfield],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-site');
  hideHeader = signal(false);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.hideHeader.set(event.urlAfterRedirects === '/my-night-sky');
    });
  }
}
