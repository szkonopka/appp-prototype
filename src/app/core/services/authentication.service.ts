import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';

@Injectable()
export class AuthenticationService {

  temporaryUser: User = new User(0, 'Samzonne', 'Szymon', 'Konopka');

  constructor() { }

  login() {
    localStorage.setItem('currentUser', JSON.stringify(this.temporaryUser));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
