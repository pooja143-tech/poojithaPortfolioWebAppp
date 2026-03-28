import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'Savvas Learning',
      subtitle: 'UI Lead (Recent Project)',
      description: 'Designed and optimized Angular‑based micro frontends for a K‑12 learning platform, improving accessibility and performance for thousands of users.',
      details: [
        'Led UI architecture decisions for scalable micro frontend structure',
        'Enforced coding standards and best practices across the team',
        'Mentored junior developers to ensure high‑quality delivery',
        'Improved platform accessibility and performance metrics'
      ],
      image: '/projects/savvas-learning.jpeg'
    },
    {
      id: 2,
      title: 'Ascend Analytics',
      subtitle: 'Analytics Platform',
      description: 'Built scalable, reusable Angular modules with RxJS workflows, streamlining analytics operations and enhancing user experience.',
      details: [
        'Developed scalable Angular modules for data visualization',
        'Implemented RxJS workflows for efficient data handling',
        'Enhanced analytics dashboard user experience',
        'Improved performance and code reusability'
      ],
      image: '/projects/ascend-analytics.jpeg'
    },
    {
      id: 3,
      title: 'Patient Management App',
      subtitle: 'Healthcare Solution',
      description: 'Designed and optimized healthcare UI components, ensuring secure, efficient patient data handling and improved usability for medical staff.',
      details: [
        'Designed secure healthcare UI components',
        'Implemented HIPAA-compliant data handling',
        'Optimized UX for medical staff workflows',
        'Improved data security and accessibility'
      ],
      image: '/projects/patient-management.jpeg'
    }
  ];
}
