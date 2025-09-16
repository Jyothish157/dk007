import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
  <section class="page">
    <h2>Dashboard</h2>
    <div class="cards">
      <a class="card" routerLink="/attendance">
        <div class="label">Today Attendance</div>
        <div class="value">--/--</div>
      </a>
      <a class="card" routerLink="/leave-balance">
        <div class="label">Leave Balance</div>
        <div class="value">View</div>
      </a>
      <a class="card" routerLink="/shifts">
        <div class="label">Shifts</div>
        <div class="value">Schedule</div>
      </a>
      <a class="card" routerLink="/reports">
        <div class="label">Reports</div>
        <div class="value">Analytics</div>
      </a>
    </div>
  </section>
  `,
  styles: [`
  .page{display:flex;flex-direction:column;gap:1rem}
  h2{margin:0;color:#0f172a}
  .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}
  .card{display:flex;flex-direction:column;gap:.5rem;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:1rem;text-decoration:none;color:#0f172a;box-shadow:0 1px 2px rgba(0,0,0,.05)}
  .card:hover{border-color:#22c55e;box-shadow:0 4px 14px rgba(2,6,23,.08)}
  .label{font-size:.9rem;color:#6b7280}
  .value{font-weight:700}
  `]
})
export class DashboardComponent {}


