import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OWNER } from '../../../../core/constants/portfolio.constants';
import { EmailService } from '../../../../core/services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  owner  = OWNER;
  private emailService = inject(EmailService);

  form = { name: '', email: '', subject: '', message: '' };
  status  = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  errorMsg = signal('');
  errors: Record<string, string> = {};

  channels = [
    { icon: '📧', label: 'Email',     value: OWNER.email,                    href: 'mailto:' + OWNER.email, color: '#6c63ff' },
    { icon: '💼', label: 'LinkedIn',  value: 'linkedin.com/in/pratik-nere',  href: OWNER.linkedin,          color: '#0077b5' },
    { icon: '🐙', label: 'GitHub',    value: 'github.com/pratiknere',        href: OWNER.github,            color: '#6e5494' },
    { icon: '💬', label: 'Instagram', value: '@pratik.nere',                 href: OWNER.instagram,         color: '#e1306c' },
  ];

  validate(): boolean {
    this.errors = {};
    if (!this.form.name.trim())    this.errors['name']    = 'Name is required';
    if (!this.form.email.trim())   this.errors['email']   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email))
                                   this.errors['email']   = 'Invalid email address';
    if (!this.form.message.trim()) this.errors['message'] = 'Message is required';
    return Object.keys(this.errors).length === 0;
  }

  async send(): Promise<void> {
    if (!this.validate()) return;

    this.status.set('sending');
    this.errorMsg.set('');

    try {
      await this.emailService.send(this.form);
      this.status.set('sent');
      this.form = { name: '', email: '', subject: '', message: '' };
      // Reset back to idle after 5 seconds
      setTimeout(() => this.status.set('idle'), 5000);
    } catch (err) {
      console.error('Email send failed:', err);
      this.errorMsg.set('Something went wrong. Please email me directly at pdnere2108@gmail.com');
      this.status.set('error');
    }
  }

  resetError(): void {
    this.status.set('idle');
    this.errorMsg.set('');
  }
}
