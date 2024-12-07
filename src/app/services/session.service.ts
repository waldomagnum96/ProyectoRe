import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private ngFireAuth: AngularFireAuth, private router: Router) { }

  async checkSession() {
    this.ngFireAuth.onAuthStateChanged((user) => {
      if (user) {
        // Usuario autenticado, redirigir a la página principal
        console.log('Usuario autenticado:', user);
        this.router.navigate(['/tabsgeneral/home']); // Ajusta la ruta según tu aplicación
      } else {
        // Usuario no autenticado, redirigir al inicio de sesión
        console.log('No hay usuario autenticado');
        this.router.navigate(['/login']); // Ajusta la ruta según tu aplicación
      }
    });
  }
}

