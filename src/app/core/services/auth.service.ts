import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) {}

  createUser(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.fireAuth.signOut();
  }
  hasUser() {
    return this.fireAuth.authState;
  }
}
