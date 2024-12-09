import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-cambiarpassword',
  templateUrl: './cambiarpassword.page.html',
  styleUrls: ['./cambiarpassword.page.scss'],
})
export class CambiarpasswordPage implements OnInit {
  token: string = '';
  nuevaContrasena: string = '';

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private emailService: EmailService,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el token de la URL
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];
      if (!this.token) {
        this.presentAlert('Error', 'El enlace es inválido o ha expirado.');
      }
    });
  }

  async cambiarContrasena() {
    if (this.nuevaContrasena.length < 6) {
      this.presentAlert('Error', 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Aquí llamas a tu servicio de backend para actualizar la contraseña
    // Asegúrate de enviar el token para que se pueda verificar en el backend
    try {
      // Suponiendo que tienes un backend que maneja la actualización
      // await this.backendService.updatePassword(this.token, this.nuevaContrasena);

      this.presentAlert('Éxito', 'Tu contraseña ha sido actualizada correctamente.');
      this.router.navigate(['/login']);  // Redirigir al login
    } catch (error) {
      this.presentAlert('Error', 'Hubo un problema al actualizar la contraseña.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}