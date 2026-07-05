import { Component } from '@angular/core';
import { OWNER } from '../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  owner = OWNER;
  year = new Date().getFullYear();

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
