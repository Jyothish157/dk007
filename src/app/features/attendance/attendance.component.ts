import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="page">
    <h2>Attendance Management</h2>

    <div class="grid">
      <div class="card clock">
        <div class="clock-time">{{ now() | date:'h:mm:ss a' }}</div>
        <div class="clock-date">{{ now() | date:'fullDate' }}</div>
        <button class="toggle" [class.on]="isClockedIn()" (click)="toggleClock()">
          <span>{{ isClockedIn() ? 'Clock Out' : 'Clock In' }}</span>
        </button>
        <div class="clock-status">Status: <strong>{{ isClockedIn() ? 'Clocked In' : 'Clocked Out' }}</strong></div>
      </div>

      <div class="card">
        <div class="card-title">Attendance History</div>
        <table class="table">
          <thead><tr><th>Date</th><th>Clock In</th><th>Clock Out</th><th>Hours</th><th>Status</th></tr></thead>
          <tbody>
            <tr *ngFor="let r of records()">
              <td>{{ r.date }}</td>
              <td>{{ r.in }}</td>
              <td>{{ r.out || '--' }}</td>
              <td>{{ r.total || '--' }}</td>
              <td><span class="badge" [class.present]="!!r.in" [class.absent]="!r.in">{{ r.in ? 'Present' : 'Absent' }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  `,
  styles: [`
  .page{display:flex;flex-direction:column;gap:1rem}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1rem}
  .card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:1rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}
  .clock{display:flex;flex-direction:column;align-items:center;gap:.5rem;background:radial-gradient(1200px 500px at -10% 120%,#e0e7ff 0%,rgba(255,255,255,0) 60%),#fff}
  .clock-time{font-size:2.25rem;font-weight:800;color:#111827}
  .clock-date{color:#6b7280}
  .toggle{display:grid;place-items:center;width:200px;height:200px;border-radius:1000px;border:0;background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;font-size:1.25rem;font-weight:700;cursor:pointer;box-shadow:0 10px 30px rgba(37,99,235,.25)}
  .toggle.on{background:linear-gradient(135deg,#ef4444,#b91c1c);box-shadow:0 10px 30px rgba(239,68,68,.25)}
  .clock-status{color:#374151}
  .table{width:100%;border-collapse:separate;border-spacing:0 8px}
  th,td{text-align:left;padding:.75rem;background:#fff}
  thead th{color:#6b7280;background:#f3f4f6}
  tbody td{border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
  tbody tr td:first-child{border-left:1px solid #e5e7eb;border-top-left-radius:8px;border-bottom-left-radius:8px}
  tbody tr td:last-child{border-right:1px solid #e5e7eb;border-top-right-radius:8px;border-bottom-right-radius:8px}
  .badge{padding:.2rem .5rem;border-radius:999px;background:#e5e7eb;color:#374151;font-size:.8rem}
  .badge.present{background:#dcfce7;color:#166534}
  .badge.absent{background:#fee2e2;color:#991b1b}
  `]
})
export class AttendanceComponent {
  constructor(private attendance: AttendanceService) {}
  isClockedIn(){ return this.attendance.isClockedIn(); }
  records(){ return this.attendance.records(); }
  now = signal(new Date());
  private _tick?: number;

  ngOnInit(){
    this._tick = window.setInterval(() => this.now.set(new Date()), 1000);
  }
  ngOnDestroy(){ if(this._tick) window.clearInterval(this._tick); }

  toggleClock(){
    if(this.isClockedIn()){
      this.attendance.clockOut();
    } else {
      this.attendance.clockIn();
    }
  }
}


