import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginInfo} from '../../model/login-info';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isErrorOnLogin: boolean;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.loginForm = this.createLoginForm();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.resetMessages();
  }

  private resetMessages() {
    this.isErrorOnLogin = false;
  }

  public login() {
    this.resetMessages();

    // if any field is invalid touch all fields and show validation errors
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      return;
    }

    // Prepare LoginInfo model with user/pass and send to AuthService
    const loginInfo: LoginInfo = this.loginForm.value;
    this.authService.login(loginInfo).then(response => {
      // if logged in redirect to my-library component
      this.router.navigate(['/my-library']);
    }).catch(error => {
      // display error on login failure
      this.isErrorOnLogin = true;
    });
  }

  // form fields
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  private createLoginForm(): FormGroup {
    return this.formBuilder.group({
      'username': ['',
        [
          // More field validation rules could be added
          Validators.required
        ]
      ],
      'password': ['',
        [
          // More field validation rules could be added
          Validators.required
        ]
      ]
    });
  }

  /**
   * Marks all controls in a form group as touched
   * @param formGroup
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

}
