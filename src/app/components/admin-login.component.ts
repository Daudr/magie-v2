import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent implements OnInit {
  username: string;
  password: string;

  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  onLoginSubmit () {
    const user = {
      username: this.username,
      password: btoa(this.password)
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.Admin);
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['admin/login']);
      }
    });
  }
}
