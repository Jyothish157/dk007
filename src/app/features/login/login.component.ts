import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserRole } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="login-wrap">
    <form class="card" (ngSubmit)="submit()">
      <h2>Sign in</h2>
      <label>
        Username
        <input [(ngModel)]="form.username" name="username" required />
      </label>
      <label>
        Password
        <input type="password" [(ngModel)]="form.password" name="password" required />
      </label>
      <label>
        Role
        <select [(ngModel)]="form.role" name="role" required>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
        </select>
      </label>
      <button class="btn primary">Login</button>
      <div class="error" *ngIf="error">{{ error }}</div>
    </form>
  </div>
  `,
  styles: [`
  .login-wrap{display:grid;place-items:center;min-height:100dvh;padding:1rem;background:linear-gradient(135deg,#0f172a,#111827)}
  .card{width:100%;max-width:380px;display:flex;flex-direction:column;gap:.75rem;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:1.25rem;box-shadow:0 8px 30px rgba(2,6,23,.25)}
  h2{margin:0 0 .5rem;color:#0f172a}
  label{display:flex;flex-direction:column;gap:.25rem;color:#374151;font-size:.9rem}
  input,select{height:40px;border:1px solid #d1d5db;border-radius:8px;padding:0 .5rem}
  .btn{height:40px;border:0;border-radius:8px;padding:0 1rem;cursor:pointer}
  .btn.primary{background:#22c55e;color:#fff}
  .error{color:#dc2626}
  `]
})
export class LoginComponent {
  error = '';
  form = { username: '', password: '', role: 'employee' as UserRole };

  constructor(private auth: AuthService, private router: Router) {}

  submit(){
    const ok = this.auth.login(this.form.username, this.form.password, this.form.role);
    if(ok){
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}


