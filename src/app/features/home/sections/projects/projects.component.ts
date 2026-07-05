import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  allProjects = PROJECTS;
  activeFilter = signal('all');
  selectedProject = signal<(typeof PROJECTS)[0] | null>(null);

  filters = [
    { key: 'all',       label: 'All' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend',  label: 'Frontend' },
    { key: 'backend',   label: 'Backend' },
  ];

  get filtered() {
    const f = this.activeFilter();
    return f === 'all' ? this.allProjects : this.allProjects.filter(p => p.category === f);
  }

  openModal(p: (typeof PROJECTS)[0]): void  { this.selectedProject.set(p); }
  closeModal(): void { this.selectedProject.set(null); }
}
