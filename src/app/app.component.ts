import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
  isSidebarOpen = false;

  constructor(private auth: AuthService, private router: Router) {}

  isAuthenticated(){ return this.auth.isAuthenticated(); }

  logout(){
    const ok = window.confirm('Are you sure you want to logout?');
    if(!ok) return;
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
