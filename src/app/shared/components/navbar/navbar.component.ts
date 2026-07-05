import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { NAV_LINKS, OWNER } from '../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  links = NAV_LINKS;
  owner = OWNER;
  scrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('hero');

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
    this.updateActive();
  }

  private updateActive(): void {
    const sections = this.links.map(l => l.href);
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  downloadResume(): void {
    const a = document.createElement('a');
    a.href = this.owner.resumeUrl;
    a.download = 'Pratik-Nere-Resume.pdf';
    a.click();
  }
}
