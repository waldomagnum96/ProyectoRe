import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  auth: any;

  constructor(public ngFireAuth: AngularFireAuth) { }

  async setPersistence() {
      return await this.ngFireAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      console.log('Persistencia establecida en LOCAL');
     } catch (error: any) {
      console.error('Error al configurar persistencia:', error);
  }

  async registerUser(email: string, password: string, fullname: any){
    return await this.ngFireAuth.createUserWithEmailAndPassword(email,password)
  }

  async LoginUser(email:string,password:string){
    await this.setPersistence();
    return await this.ngFireAuth.signInWithEmailAndPassword(email,password)
  }

  async resetPassword(email:string){
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }

  async singOut(){
    return await this.ngFireAuth.signOut()
  }

  async getProfile(){
    return await this.ngFireAuth.currentUser
  }

  

  

 
}
