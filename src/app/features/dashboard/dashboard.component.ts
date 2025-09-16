import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
  <section class="page">
    <header class="header">
      <div>
        <h1>Dashboard Overview</h1>
        <p class="muted">Welcome back! Here's what's happening today.</p>
      </div>
      <button class="logout" (click)="logout()">Logout</button>
    </header>

    <div class="kpis">
      <a class="kpi" routerLink="/attendance">
        <div class="icon blue">⌚</div>
        <div class="meta">
          <div class="title">Today's Attendance</div>
          <div class="desc">142 of 160 employees</div>
        </div>
        <div class="value">89%</div>
      </a>

      <a class="kpi" routerLink="/leave-requests">
        <div class="icon violet">📅</div>
        <div class="meta">
          <div class="title">Pending Leave Requests</div>
          <div class="desc">3 urgent approvals</div>
        </div>
        <div class="value">12</div>
      </a>

      <a class="kpi" routerLink="/shifts">
        <div class="icon green">👥</div>
        <div class="meta">
          <div class="title">Shift Coverage</div>
          <div class="desc">2 open shifts</div>
        </div>
        <div class="value">96%</div>
      </a>
    </div>

    <div class="grid">
      <div class="card">
        <div class="card-title">Recent Activity</div>
        <ul class="list">
          <li>Mike Johnson submitted a leave request</li>
          <li>Shift swap approved for Sarah Wilson</li>
          <li>Attendance synced at 7:00 PM</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title">Quick Actions</div>
        <div class="quick">
          <a routerLink="/attendance" class="qa">Clock In</a>
          <a routerLink="/leave-requests" class="qa">New Leave</a>
          <a routerLink="/reports" class="qa">View Reports</a>
        </div>
      </div>
    </div>
  </section>
  `,
  styles: [`
  .page{display:flex;flex-direction:column;gap:1rem}
  .header{display:flex;align-items:center;justify-content:space-between}
  .header h1{margin:.25rem 0;color:#1f2937}
  .muted{color:#6b7280;margin:0}
  .logout{height:36px;border:0;border-radius:8px;padding:0 .9rem;background:#ef4444;color:#fff;cursor:pointer}

  .kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}
  .kpi{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:1rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;padding:1rem;text-decoration:none;color:#0f172a;box-shadow:0 1px 2px rgba(0,0,0,.05)}
  .kpi:hover{box-shadow:0 8px 30px rgba(2,6,23,.08);border-color:#c7d2fe}
  .icon{width:44px;height:44px;display:grid;place-items:center;border-radius:12px;color:#fff;font-size:1.25rem}
  .icon.blue{background:linear-gradient(135deg,#60a5fa,#3b82f6)}
  .icon.violet{background:linear-gradient(135deg,#a78bfa,#7c3aed)}
  .icon.green{background:linear-gradient(135deg,#34d399,#059669)}
  .meta .title{font-weight:600}
  .meta .desc{color:#6b7280;font-size:.85rem}
  .value{font-weight:800;font-size:1.5rem}

  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem}
  .card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:1rem}
  .card-title{font-weight:600;color:#111827;margin-bottom:.5rem}
  .list{margin:0;padding-left:1rem;color:#374151}
  .quick{display:flex;flex-wrap:wrap;gap:.5rem}
  .qa{display:inline-flex;align-items:center;justify-content:center;height:36px;padding:0 .9rem;border-radius:10px;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;text-decoration:none}
  `]
})
export class DashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logout(){
    const ok = window.confirm('Are you sure you want to logout?');
    if(!ok) return;
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}


