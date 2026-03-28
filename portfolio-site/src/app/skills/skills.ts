import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, Carousel],
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  projectSkills = [
  {
    description: 'Core Frontend',
    skills: [
      // { title: 'HTML5', image: 'HTML5.jpg' },
      { title: 'HTML5 & CSS3', image: 'html5-css3.jpg' },
      { title: 'JavaScript', image: 'js.png' },
      { title: 'TypeScript', image: 'ts.png' },
      { title: 'ES6 – ES25', image: 'es.png' },
      { title: 'SCSS', image: 'SCSS.webp' },
      { title: 'Tailwind CSS', image: 'tailwind.png' },
      { title: 'D3.js', image: 'd3.png' },
    ],
  },
  {
    description: 'Angular Ecosystem',
    skills: [
      { title: 'Angular (v14–18+)', image: 'angular.png' },
      { title: 'RxJS', image: 'rxjs.png' },
      { title: 'NgRx', image: 'ngrx.jpeg' },
      { title: 'Angular Material', image: 'angularMat.png' },
      { title: 'MFE (module Federation)', image: 'mfe.webp' },
    ],
  },
  {
    description: 'Testing Frameworks and Devop tools',
    skills: [
      { title: 'Jasmine', image: 'jas.jpeg' },
      { title: 'Jest', image: 'jest.png' },
      { title: 'Karma', image: 'karma.png' },
      { title: 'Git', image: 'git.jpg' },
      { title: 'GitHub CI/CD', image: 'github.jpg' },
      { title: 'GitLab CI/CD', image: 'gitlab.png' },
      { title: 'AWS', image: 'aws.png' },
      { title: 'Webpack', image: 'webpack.jpg' },
       { title: 'SonarQube', image: 'sonar.png' },
      { title: 'Jenkins', image: 'jenkins.png' },
    ],
  },
];
}
