import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { describe } from 'node:test';
import { title } from 'process';

@Component({
  selector: 'app-carousel',
  standalone: true, // ✅ Add this
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  @Input() projectData: any;
   @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
   

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }


}
