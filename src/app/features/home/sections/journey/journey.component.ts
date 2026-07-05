import { Component } from '@angular/core';
import { JOURNEY } from '../../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-journey',
  standalone: true,
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss',
})
export class JourneyComponent {
  items = JOURNEY;
}
