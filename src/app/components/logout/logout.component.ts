import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent {

  constructor(private router: Router,
              private authService: AuthService) {
    // logout and redirect to home component
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
