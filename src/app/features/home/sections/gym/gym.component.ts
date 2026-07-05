import { Component, signal } from '@angular/core';
import { GYM_QUOTES } from '../../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-gym',
  standalone: true,
  templateUrl: './gym.component.html',
  styleUrl: './gym.component.scss',
})
export class GymComponent {
  quotes = GYM_QUOTES;
  activeQuote = signal(0);

  principles = [
    { icon: '🎯', title: 'Consistency Over Intensity', desc: 'Show up every day. Progress compounds like interest — slow but unstoppable.' },
    { icon: '🧠', title: 'Mind-Muscle Connection', desc: 'Discipline in the gym rewires your brain for focus, which carries directly into coding.' },
    { icon: '💪', title: 'Progressive Overload', desc: 'Add one more rep, one more kg. In code: one more feature, one better pattern.' },
    { icon: '🔄', title: 'Recovery is Growth', desc: 'Rest days aren\'t lazy days. Same in software — refactoring is still engineering.' },
  ];

  stats = [
    { label: 'Sessions / Week', value: '5-6' },
    { label: 'Years Training',  value: '3+'  },
    { label: 'Favourite Lift',  value: 'Bench' },
    { label: 'Philosophy',      value: 'Hybrid' },
  ];

  nextQuote(): void { this.activeQuote.update(v => (v + 1) % this.quotes.length); }
  prevQuote(): void { this.activeQuote.update(v => (v - 1 + this.quotes.length) % this.quotes.length); }
}
