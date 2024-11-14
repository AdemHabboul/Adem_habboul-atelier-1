import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'mes_vetement';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() { 
    const isLoggedIn = localStorage.getItem('isloggedIn');
    const loggedUser = localStorage.getItem('loggedUser');
    
    if (isLoggedIn !== 'true' || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }
}
