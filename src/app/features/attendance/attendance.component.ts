import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="page">
    <h2>Employee Attendance</h2>
    <div class="actions">
      <button (click)="clockIn()" [disabled]="isClockedIn()" class="btn primary">Clock In</button>
      <button (click)="clockOut()" [disabled]="!isClockedIn()" class="btn danger">Clock Out</button>
    </div>
    <div class="status">Status: <strong>{{ isClockedIn() ? 'Clocked In' : 'Clocked Out' }}</strong></div>
    <table class="table">
      <thead><tr><th>Date</th><th>Clock In</th><th>Clock Out</th><th>Total</th></tr></thead>
      <tbody>
        <tr *ngFor="let r of records()">
          <td>{{ r.date }}</td>
          <td>{{ r.in }}</td>
          <td>{{ r.out || '-' }}</td>
          <td>{{ r.total || '-' }}</td>
        </tr>
      </tbody>
    </table>
  </section>
  `,
  styles: [`
  .page{display:flex;flex-direction:column;gap:1rem}
  .actions{display:flex;gap:.5rem}
  .btn{padding:.6rem 1rem;border:1px solid transparent;border-radius:8px;cursor:pointer}
  .btn.primary{background:#22c55e;color:#fff}
  .btn.danger{background:#ef4444;color:#fff}
  .btn:disabled{opacity:.6;cursor:not-allowed}
  .status{color:#374151}
  .table{width:100%;border-collapse:separate;border-spacing:0 8px}
  th,td{text-align:left;padding:.75rem;background:#fff}
  thead th{color:#6b7280;background:#f3f4f6}
  tbody td{border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
  tbody tr td:first-child{border-left:1px solid #e5e7eb;border-top-left-radius:8px;border-bottom-left-radius:8px}
  tbody tr td:last-child{border-right:1px solid #e5e7eb;border-top-right-radius:8px;border-bottom-right-radius:8px}
  `]
})
export class AttendanceComponent {
  constructor(private attendance: AttendanceService) {}
  isClockedIn(){ return this.attendance.isClockedIn(); }
  records(){ return this.attendance.records(); }

  clockIn(){ this.attendance.clockIn(); }
  clockOut(){ this.attendance.clockOut(); }
}


