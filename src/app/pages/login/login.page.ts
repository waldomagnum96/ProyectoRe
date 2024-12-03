import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from 'src/app/services/authetication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  showPassword: boolean = false;

  // email:any
  // password:any
  // contact:any

  constructor(private toastController: ToastController, private alertController: AlertController, private loadingController: LoadingController, private authService: AutheticationService, private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.required,
      ]
      ],
    });
  }


  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  












  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    if (this.ionicForm.valid) {
        try {
            const user = await this.authService.LoginUser(
                this.ionicForm.value.email,
                this.ionicForm.value.password
            );

            if (user) {
                loading.dismiss();
                this.router.navigate(['/tabsgeneral/home']);
            }
        } catch (err: any) {
            // Extraer el mensaje de error
            const errorMessage = err?.message || 'Error desconocido. Inténtalo de nuevo.';
            this.presentToast(errorMessage);  // Llamar a presentToast con el mensaje de error
            console.log(err);
            // Desaparecer el loading después de 2 segundos
            setTimeout(() => {
                loading.dismiss();
            }, 2000);
        }
    } else {
        console.log('Please provide all the required values!');
        loading.dismiss();  // Desaparece el loading si el formulario no es válido
    }
}
  get errorControl() {
    return this.ionicForm.controls;
  }

  async presentToast(message: undefined) {
    console.log(message);

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }




  async ionViewWillEnter() {
    const user = await this.authService.getProfile(); // Verificar si hay un usuario actual en Firebase

    if (!user) {
      // Si no hay usuario autenticado, limpiar el formulario
      this.ionicForm.reset();
    }
  }
  



  
}