import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private ngFireAuth: AngularFireAuth) {
    this.checkAuthState();
  }

  checkAuthState() {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        console.log('Usuario autenticado:', user);
        // Redirigir al usuario a la página principal
      } else {
        console.log('Usuario no autenticado');
        // Redirigir al usuario a la página de inicio de sesión
      }
    });
  }
}
