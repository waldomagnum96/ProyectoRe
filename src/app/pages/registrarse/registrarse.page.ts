import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AutheticationService} from 'src/app/services/authetication.service';



@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  //validad los campos de registrarse
  ionicForm: FormGroup;
  passwordType: string = 'password';  // Inicialmente la contraseña está oculta
  passwordIcon: string = 'eye-off-outline';  // Icono de ojo cerrado por defecto

  constructor(private toastController: ToastController,private loadingController: LoadingController,private authService:AutheticationService,private router: Router, public formBuilder: FormBuilder) { 
    

  }

  ngOnInit() {
    // this.signUP()
    this.ionicForm = this.formBuilder.group({
      fullname:['',
        [Validators.required]
      ],
      contact:['',
      [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(9),
        // Validators.min(10)
      ]
    ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])[A-Za-z\\d\\W].{8,}'),
        Validators.required,
      ],
    ],
    });
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  // async signUpWithGoogle(){
  //   const loading = await this.loadingController.create();
  //   // await loading.present();

  //   const user = await this.authService.GoogleAuth().then((re)=>{
  //     console.log(re);
      
  //     // this.router.navigate(['/home'])
  //   })
  // }

  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';  // Cambiar a tipo texto para mostrar la contraseña
      this.passwordIcon = 'eye-outline';  // Cambiar el ícono a ojo abierto
    } else {
      this.passwordType = 'password';  // Cambiar de vuelta a tipo password para ocultar
      this.passwordIcon = 'eye-off-outline';  // Cambiar el ícono a ojo cerrado
    }
  }










 
  async signUP() {
    const loading = await this.loadingController.create();
    await loading.present();
  
    if (this.ionicForm.valid) {
      try {
        const user = await this.authService.registerUser(
          this.ionicForm.value.email,
          this.ionicForm.value.password,
          this.ionicForm.value.fullname
        );
        if (user) {
          loading.dismiss();
          this.router.navigate(['/login']);
        }
      } catch (err) {
        console.error(err);
        this.presentToast('Error al registrar usuario. Inténtalo de nuevo.');
        loading.dismiss();
      }
    } else {
      loading.dismiss(); // Detenemos el cargador si el formulario es inválido
      this.presentToast('Por favor completa todos los campos correctamente.');
      console.log('Formulario inválido');
    }
  }







  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });
  
    await toast.present();
  }
}