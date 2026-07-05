import { Component } from '@angular/core';
import { OWNER, EDUCATION } from '../../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  owner   = OWNER;
  education = EDUCATION;

  facts = [
    { icon: '🏋️', label: 'Fitness Enthusiast',  desc: 'Gym is my second home. 3+ years of consistent training.' },
    { icon: '🏍️', label: 'Bike Rider',           desc: 'Long rides through the Sahyadris clear my mind best.' },
    { icon: '✈️', label: 'Traveller',             desc: 'Exploring new places fuels creativity and perspective.' },
    { icon: '🤖', label: 'AI-Powered Dev',        desc: 'GitHub Copilot + MCP user. Working smarter, not just harder.' },
    { icon: '📚', label: 'Continuous Learner',    desc: 'Currently exploring cloud architecture and AI-assisted engineering.' },
    { icon: '🎯', label: 'Goal Oriented',         desc: 'Clean code, scalable systems, beautiful UIs. No shortcuts.' },
  ];
}
