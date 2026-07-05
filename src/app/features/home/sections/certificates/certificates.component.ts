import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CERTIFICATES } from '../../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
})
export class CertificatesComponent {
  certs = CERTIFICATES;
  selected = signal<typeof CERTIFICATES[0] | null>(null);
}
