import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService: AuthService, // service is used in template
              private router: Router) {
  }

  public logout(): void {
    // just navigate to logout component on click
    this.router.navigate(['/logout']);
  }

}
