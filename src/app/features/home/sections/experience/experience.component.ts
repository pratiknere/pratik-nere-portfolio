import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES } from '../../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
  expanded = new Set<number>([0]); // first card open by default

  toggle(i: number): void {
    this.expanded.has(i) ? this.expanded.delete(i) : this.expanded.add(i);
  }
}
