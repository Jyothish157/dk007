import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-leave-balance',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="page">
    <h2>Leave Balance</h2>
    <div class="cards">
      <div class="card" *ngFor="let b of balances()">
        <div class="label">{{ b.type }}</div>
        <div class="value">{{ b.balanceDays }} days</div>
      </div>
    </div>
  </section>
  `,
  styles: [`
  .page{display:flex;flex-direction:column;gap:1rem}
  .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem}
  .card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:1rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}
  .label{color:#6b7280}
  .value{font-size:1.25rem;font-weight:700}
  `]
})
export class LeaveBalanceComponent {
  constructor(private leave: LeaveService) {}
  balances(){ return this.leave.balances(); }
}


