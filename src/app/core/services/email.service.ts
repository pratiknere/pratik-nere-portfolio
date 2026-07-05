import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

export interface ContactForm {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private initialized = false;

  private init(): void {
    if (!this.initialized) {
      emailjs.init(environment.emailjsPublicKey);
      this.initialized = true;
    }
  }

  async send(form: ContactForm): Promise<void> {
    this.init();

    const templateParams = {
      from_name:    form.name,
      from_email:   form.email,
      subject:      form.subject || 'Portfolio Contact',
      message:      form.message,
      to_name:      'Pratik',
      reply_to:     form.email,
    };

    const response = await emailjs.send(
      environment.emailjsServiceId,
      environment.emailjsTemplateId,
      templateParams,
    );

    if (response.status !== 200) {
      throw new Error(`EmailJS error: ${response.text}`);
    }
  }
}
