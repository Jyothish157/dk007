import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="page">
    <h2>Reports & Analytics</h2>
    <div class="grid">
      <div class="card">
        <div class="label">Attendance Trend</div>
        <div class="chart">
          <div class="bar" style="height:60%"></div>
          <div class="bar" style="height:80%"></div>
          <div class="bar" style="height:40%"></div>
          <div class="bar" style="height:70%"></div>
          <div class="bar" style="height:50%"></div>
        </div>
      </div>
      <div class="card">
        <div class="label">Leave Usage</div>
        <ul class="list">
          <li>Sick: 12%</li>
          <li>Vacation: 65%</li>
          <li>Casual: 23%</li>
        </ul>
      </div>
    </div>
  </section>
  `,
  styles: [`
  .page{display:flex;flex-direction:column;gap:1rem}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}
  .card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:1rem}
  .label{color:#6b7280;margin-bottom:.5rem}
  .chart{display:flex;gap:.5rem;align-items:flex-end;height:160px}
  .bar{flex:1;background:linear-gradient(180deg,#22c55e,#059669);border-radius:6px}
  .list{margin:0;padding-left:1rem;color:#374151}
  `]
})
export class ReportsComponent {}


