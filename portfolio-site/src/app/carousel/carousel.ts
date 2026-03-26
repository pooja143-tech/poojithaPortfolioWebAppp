import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true, // ✅ Add this
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
   @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  items = [
    { title: 'Project One', image: 'corsi1.jpeg' },
    { title: 'Project Two', image: 'corsi2.jpeg' },
    { title: 'Project Three', image: 'corsi3.jpeg' },
    { title: 'Project Four', image: 'corsi4.png' },
    { title: 'Project Five', image: 'corsi5.jpeg' },
    { title: 'Project Six', image: 'corsi6.png' },
    { title: 'Project Seven', image: 'corsi7.jpeg' },
    { title: 'Project Eight', image: 'favicon.ico' },

  ];

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }


}
