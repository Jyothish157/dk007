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
        <div class="header">
          <div class="dot"></div>
          <div class="label">{{ b.type }}</div>
        </div>
        <div class="value">{{ b.balanceDays }}</div>
        <div class="sub">days left</div>
        <div class="bar"><span [style.width.%]="(b.balanceDays/20) * 100"></span></div>
      </div>
    </div>
  </section>
  `,
  styles: [`
  .page{display:flex;flex-direction:column;gap:1rem}
  .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}
  .card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:1rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}
  .header{display:flex;align-items:center;gap:.5rem}
  .dot{width:10px;height:10px;border-radius:999px;background:#4f46e5}
  .label{color:#6b7280}
  .value{font-size:2rem;font-weight:800;color:#111827}
  .sub{color:#6b7280;margin-top:-.5rem}
  .bar{height:10px;background:#eef2ff;border-radius:999px;margin-top:.5rem;overflow:hidden}
  .bar span{display:block;height:100%;background:linear-gradient(135deg,#6366f1,#7c3aed)}
  `]
})
export class LeaveBalanceComponent {
  constructor(private leave: LeaveService) {}
  balances(){ return this.leave.balances(); }
}


