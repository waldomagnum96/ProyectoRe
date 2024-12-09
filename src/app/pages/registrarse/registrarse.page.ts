import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AutheticationService } from 'src/app/services/authetication.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  ionicForm: FormGroup;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private authService: AutheticationService,
    private emailService: EmailService, // Inyecta el servicio de Email
    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])[A-Za-z\\d\\W].{8,}')
      ]],
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

  async signUP() {
    const loading = await this.loadingController.create();
    await loading.present();

    if (this.ionicForm.valid) {
      try {
        const { email, password, fullname } = this.ionicForm.value;

        const user = await this.authService.registerUser(email, password, fullname);
        if (user) {
          // Envía el correo de bienvenida
          await this.emailService.sendWelcomeEmail(email, fullname);
          this.presentToast('Usuario registrado y correo enviado.');
          this.router.navigate(['/tabsgeneral/home']);
        }
      } catch (err) {
        console.error(err);
        this.presentToast('Error al registrar usuario. Inténtalo de nuevo.');
      } finally {
        loading.dismiss();
      }
    } else {
      loading.dismiss();
      this.presentToast('Por favor completa todos los campos correctamente.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
