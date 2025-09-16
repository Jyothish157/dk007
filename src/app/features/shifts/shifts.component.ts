import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShiftService } from '../../services/shift.service';

@Component({
  selector: 'app-shifts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <section class="page">
    <h2>Shift Management</h2>
    <form class="form" (ngSubmit)="requestSwap()">
      <label>
        Date
        <input type="date" [(ngModel)]="swap.date" name="date" required />
      </label>
      <label>
        From Shift
        <select [(ngModel)]="swap.from" name="from" required>
          <option>Morning</option>
          <option>Evening</option>
          <option>Night</option>
        </select>
      </label>
      <label>
        To Shift
        <select [(ngModel)]="swap.to" name="to" required>
          <option>Morning</option>
          <option>Evening</option>
          <option>Night</option>
        </select>
      </label>
      <button class="btn primary">Request Swap</button>
    </form>

    <table class="table">
      <thead><tr><th>Date</th><th>Shift</th></tr></thead>
      <tbody>
        <tr *ngFor="let s of shifts()">
          <td>{{ s.date }}</td>
          <td>{{ s.time }}</td>
        </tr>
      </tbody>
    </table>
  </section>
  `,
  styles: [`
  .page{display:flex;flex-direction:column;gap:1rem}
  .form{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.75rem;align-items:end;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:1rem}
  label{display:flex;flex-direction:column;gap:.25rem;color:#374151;font-size:.9rem}
  input,select{height:38px;border:1px solid #d1d5db;border-radius:8px;padding:0 .5rem}
  .btn{height:38px;border:0;border-radius:8px;padding:0 1rem;cursor:pointer}
  .btn.primary{background:#22c55e;color:#fff}
  .table{width:100%;border-collapse:separate;border-spacing:0 8px}
  th,td{text-align:left;padding:.75rem;background:#fff}
  thead th{color:#6b7280;background:#f3f4f6}
  tbody td{border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
  tbody tr td:first-child{border-left:1px solid #e5e7eb;border-top-left-radius:8px;border-bottom-left-radius:8px}
  tbody tr td:last-child{border-right:1px solid #e5e7eb;border-top-right-radius:8px;border-bottom-right-radius:8px}
  `]
})
export class ShiftsComponent {
  constructor(private shift: ShiftService) {}
  shifts(){ return this.shift.shifts(); }
  swap = { date: '', from: 'Morning' as const, to: 'Evening' as const };

  requestSwap(){
    this.shift.requestSwap(this.swap.date, this.swap.from, this.swap.to);
    alert('Swap request submitted for '+this.swap.date+': '+this.swap.from+' → '+this.swap.to);
    this.swap = { date: '', from: 'Morning', to: 'Evening' };
  }
}


