import { Injectable, signal } from '@angular/core';

export type UserRole = 'employee' | 'manager';

@Injectable({ providedIn: 'root' })
export class AuthService {
  role = signal<UserRole | null>(null);
  isAuthenticated = signal(false);

  login(username: string, password: string, role: UserRole): boolean {
    // Mock validation. Replace with API call later.
    const ok = !!username && !!password;
    if (ok) {
      this.role.set(role);
      this.isAuthenticated.set(true);
    }
    return ok;
  }

  logout(): void {
    this.role.set(null);
    this.isAuthenticated.set(false);
  }
}


