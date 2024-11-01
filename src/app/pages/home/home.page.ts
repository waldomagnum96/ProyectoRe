import { Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutheticationService } from 'src/app/services/authetication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login:any;
  user: null;
  constructor(public router:Router,private activedRoute: ActivatedRoute, private authService: AutheticationService) {
    this.activedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){
        this.login=this.router.getCurrentNavigation()?.extras?.state?.['login'];
        
      }
    })
  }
  @ViewChild('backgroundAudio') backgroundAudio: any;
  isPlaying: boolean = false; // Estado de reproducción

  toggleAudio() {
    const audio = this.backgroundAudio.nativeElement;
    
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
