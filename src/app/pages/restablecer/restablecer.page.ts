import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AutheticationService } from 'src/app/services/authetication.service';
import { AuthguardService } from 'src/app/services/authguard.service';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  dato:any={
    nombreUsuario:"",
    nuevaCon:""
  };
  email:any
  constructor(public alertController:AlertController, private authService: AutheticationService, private toastController: ToastController,private router: Router) { }

  ngOnInit() {
  }

  restablecer() {
    if(this.dato.nombreUsuario !="" && this.dato.nuevaCon !=""){
      this.presentAlert("Información", "¡Haz restablecido tu contraseña!");
    }else{
      this.presentAlert("Error","Por favor rellene todos los campos");
    }
  }

  async presentAlert(mensajeHeader:string,mensaje:string) {
    const alert = await this.alertController.create({
      header: mensajeHeader,
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  reset(){
    this.authService.resetPassword(this.email).then( () =>{      
      console.log('sent'); //show confirmation dialog
      this.presentToast()
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Tu enlace para resetear tu password a sido enviado a tu email',
      duration: 2000, // Duration in milliseconds
      position: 'bottom' // Position of the toast (top, bottom, middle)
    });
  
    toast.present();
    toast.onDidDismiss().then(()=>{
      this.router.navigate(['/login']);
    })
  }









}
