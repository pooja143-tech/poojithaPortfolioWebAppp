import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  imageSrc = '/poojilonghair1.png';

  onImageHover() {
    this.imageSrc = '/poojibowhaircut.png';
  }

  onImageLeave() {
    this.imageSrc = '/poojilonghair1.png';
  }
}
