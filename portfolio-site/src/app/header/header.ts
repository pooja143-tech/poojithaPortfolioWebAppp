import { Component } from '@angular/core';
import { Home } from '../home/home';
import { Projects } from '../projects/projects';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
