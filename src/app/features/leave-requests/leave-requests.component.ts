import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaveService } from '../../services/leave.service';
import { LeaveType } from '../../models/leave.model';


@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <section class="page">
    <h2>Leave Requests</h2>
    <form class="form" (ngSubmit)="submit()">
      <label>
        Type
        <select [(ngModel)]="form.type" name="type" required>
          <option *ngFor="let t of types" [value]="t">{{t}}</option>
        </select>
      </label>
      <label>
        From
        <input type="date" [(ngModel)]="form.from" name="from" required />
      </label>
      <label>
        To
        <input type="date" [(ngModel)]="form.to" name="to" required />
      </label>
      <label>
        Reason
        <input type="text" [(ngModel)]="form.reason" name="reason" placeholder="Optional" />
      </label>
      <button class="btn primary">Submit</button>
    </form>

    <table class="table">
      <thead><tr><th>Date</th><th>Type</th><th>Range</th><th>Status</th></tr></thead>
      <tbody>
        <tr *ngFor="let r of requests">
          <td>{{ r.created }}</td>
          <td>{{ r.type }}</td>
          <td>{{ r.from }} → {{ r.to }}</td>
          <td><span class="badge" [class.approved]="r.status==='Approved'" [class.pending]="r.status==='Pending'" [class.rejected]="r.status==='Rejected'">{{ r.status }}</span></td>
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
  .badge{padding:.25rem .5rem;border-radius:999px;font-size:.8rem;background:#e5e7eb;color:#374151}
  .badge.approved{background:#dcfce7;color:#166534}
  .badge.pending{background:#fef9c3;color:#854d0e}
  .badge.rejected{background:#fee2e2;color:#991b1b}
  `]
})
export class LeaveRequestsComponent {
  types: LeaveType[] = ['Sick','Vacation','Casual'];
  form = { type: 'Sick' as LeaveType, from: '', to: '', reason: '' };
  constructor(private leave: LeaveService) {}
  get requests(){ return this.leave.requests(); }

  submit(){
    this.leave.submitRequest(this.form.type, this.form.from, this.form.to, this.form.reason);
    this.form = { type: 'Sick', from: '', to: '', reason: '' };
  }
}


