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
        Validators.minLength(10),
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
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
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
 
  async signUP(){
    const loading = await this.loadingController.create();
    await loading.present();
    if (this.ionicForm.valid) {

      const user = await this.authService.registerUser(this.ionicForm.value.email, this.ionicForm.value.password,this.ionicForm.value.fullname).catch((err: undefined) => {
        this.presentToast(err)
        console.log(err);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(['/login'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }
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
}