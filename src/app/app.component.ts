import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private ngFireAuth: AngularFireAuth, private sessionService: SessionService) {
    
  }

  ngOnInit() {
    // Llama al servicio para verificar la sesión al iniciar la aplicación
    this.sessionService.checkSession();
  }

  
}
