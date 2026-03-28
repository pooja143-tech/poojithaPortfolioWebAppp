import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel implements AfterViewInit {
  @Input() projectData: any;
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  
  canScrollLeft = false;
  canScrollRight = false;

  ngAfterViewInit() {
    this.checkScrollability();
    this.carousel.nativeElement.addEventListener('scroll', () => this.checkScrollability());
  }

  checkScrollability() {
    const element = this.carousel.nativeElement;
    this.canScrollLeft = element.scrollLeft > 0;
    this.canScrollRight = element.scrollLeft < (element.scrollWidth - element.clientWidth - 10);
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    setTimeout(() => this.checkScrollability(), 300);
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    setTimeout(() => this.checkScrollability(), 300);
  }
}
