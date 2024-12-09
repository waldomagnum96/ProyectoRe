import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceId = 'service_eycl6zd';
  private templateId = 'template_edq6b3h';
  private userId = 'dGhmo-Nw2XFtQJoWN';

  constructor() {}

  // Enviar correo de bienvenida
  async sendWelcomeEmail(toEmail: string, toName: string) {
    const templateParams = {
      to_email: toEmail,
      to_name: toName,
    };

    try {
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.userId
      );
      console.log('Correo de bienvenida enviado correctamente!', response);
      return response;
    } catch (error) {
      console.error('Error al enviar el correo de bienvenida:', error);
      throw error;
    }
  }
}
