import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit {
  categories = [
    { key: 'frontend',  label: 'Frontend',  icon: '🎨', skills: SKILLS.frontend  },
    { key: 'backend',   label: 'Backend',   icon: '⚙️', skills: SKILLS.backend   },
    { key: 'databases', label: 'Databases', icon: '🗄️', skills: SKILLS.databases  },
    { key: 'devops',    label: 'DevOps & AI', icon: '🚀', skills: SKILLS.devops  },
  ];

  techChips = [
    { name: 'Angular 20',       emoji: '🅰️', color: '#dd0031' },
    { name: 'TypeScript',       emoji: '📘', color: '#3178c6' },
    { name: 'Java 17/21',       emoji: '☕', color: '#ed8b00' },
    { name: 'Spring Boot 3.x',  emoji: '🍃', color: '#6db33f' },
    { name: 'Apache Kafka',     emoji: '📨', color: '#6c63ff' },
    { name: 'Docker',           emoji: '🐳', color: '#2496ed' },
    { name: 'Kubernetes',       emoji: '⎈',  color: '#326ce5' },
    { name: 'Oracle',           emoji: '🔴', color: '#f80000' },
    { name: 'PostgreSQL',       emoji: '🐘', color: '#336791' },
    { name: 'Elasticsearch',    emoji: '🔍', color: '#005571' },
    { name: 'Couchbase',        emoji: '🍃', color: '#ea2328' },
    { name: 'Redis',            emoji: '⚡', color: '#dc382d' },
    { name: 'Spring Security',  emoji: '🔒', color: '#6db33f' },
    { name: 'JWT / OAuth2',     emoji: '🔑', color: '#f59e0b' },
    { name: 'RxJS',             emoji: '🔄', color: '#b7178c' },
    { name: 'REST APIs',        emoji: '🔌', color: '#00adb5' },
    { name: 'GitHub Copilot',   emoji: '🤖', color: '#6c63ff' },
    { name: 'Git / Bitbucket',  emoji: '🌿', color: '#f05032' },
    { name: 'Jenkins',          emoji: '🏗️', color: '#d33834' },
    { name: 'JUnit 5 / Mockito',emoji: '🧪', color: '#25a162' },
    { name: 'Agile / Scrum',    emoji: '🏃', color: '#ff6584' },
    { name: 'OpenAPI / Swagger',emoji: '📄', color: '#49cc90' },
  ];

  @ViewChildren('barFill') barFills!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.width = el.dataset['level'] + '%';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    this.barFills.forEach(ref => observer.observe(ref.nativeElement));
  }
}
