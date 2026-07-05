import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { ACHIEVEMENTS_LIST } from '../../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-achievements',
  standalone: true,
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent implements AfterViewInit {
  achievements = ACHIEVEMENTS_LIST;

  counters = [
    { label: 'Months at Cybage',  end: 20,   suffix: '+' },
    { label: 'Coding Hours',      end: 2000, suffix: '+' },
    { label: 'Tech Stack Size',   end: 20,   suffix: '+' },
    { label: 'Gym Sessions',      end: 300,  suffix: '+' },
  ];

  displayValues: number[] = [];

  @ViewChildren('counterEl') counterEls!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    this.displayValues = this.counters.map(() => 0);
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.counters.forEach((c, i) => this.animateCounter(i, c.end));
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    const section = document.getElementById('achievements');
    if (section) observer.observe(section);
  }

  private animateCounter(index: number, end: number): void {
    const duration = 2000;
    const step = 16;
    const increment = end / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, end);
      this.displayValues[index] = Math.floor(current);
      if (current >= end) clearInterval(timer);
    }, step);
  }
}
