import { Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutheticationService } from 'src/app/services/authetication.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login:any;
  user: null;


  audios = [
    { name: 'The Front Hall', src: '../../../assets/audio/08 - The Front Hall.mp3' },
    { name: 'Safe Room', src: '../../../assets/audio/1-09 - Free From Fear.mp3' },
    { name: 'The first Floor', src: '../../../assets/audio/09 - The First Floor.mp3' },
    { name: 'Secure Place', src: '../../../assets/audio/11 - Secure Place.mp3' },
    { name: 'Serenety', src: '../../../assets/audio/06 - Serenity.mp3' },
    { name: 'The Suspended Doll', src: '../../../assets/audio/1-29 - The Suspended Doll.mp3' },
  ];

  currentAudioSrc = ''; // Ruta del audio actual
  currentAudioName = ''; // Nombre del audio actual
  isPlaying = false;




























  



  
  constructor(public router:Router,private activedRoute: ActivatedRoute, private authService: AutheticationService, private actionSheetController: ActionSheetController) {
    this.activedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){
        this.login=this.router.getCurrentNavigation()?.extras?.state?.['login'];
        
      }
    })
  }
  async openMusicSelector() {
    const buttons = this.audios.map((audio) => ({
      text: audio.name,
      handler: () => this.selectAudio(audio),
    }));

    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccionar Música',
      buttons: [...buttons, { text: 'Cancelar', role: 'cancel' }],
    });

    await actionSheet.present();
  }

  selectAudio(audio: { name: string; src: string }) {
    this.currentAudioName = audio.name;
    this.toggleAudio(audio.src);
  }

  toggleAudio(audioSrc?: string) {
    const audio = document.getElementById('backgroundAudio') as HTMLAudioElement;

    // Si se selecciona un nuevo audio, lo actualizamos
    if (audioSrc && audioSrc !== this.currentAudioSrc) {
      this.currentAudioSrc = audioSrc;
      audio.src = this.currentAudioSrc;
      audio.load(); // Cargamos el nuevo audio
      this.isPlaying = false; // Resetear el estado
    }

    if (this.isPlaying) {
      audio.pause(); // Pausa el audio
    } else {
      audio.play(); // Reproduce el audio
    }

    this.isPlaying = !this.isPlaying; // Cambia el estado de reproducción
  }































  
  async signOut() {
    try {
      await this.authService.singOut(); // Llamar al método de cerrar sesión en el servicio
      this.router.navigate(['/login']); // Navegar a la página de login
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  }

 
  
}
