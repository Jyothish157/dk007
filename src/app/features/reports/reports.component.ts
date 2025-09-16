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
        <div class="label">Leave Usage by Type</div>
        <div class="donut">
          <div class="ring"></div>
          <div class="legend">
            <span class="dot v"></span> Vacation
            <span class="dot s"></span> Sick
            <span class="dot c"></span> Casual
          </div>
        </div>
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
  .donut{display:flex;gap:1rem;align-items:center}
  .ring{width:140px;height:140px;border-radius:999px;background:conic-gradient(#3b82f6 0 65%, #ef4444 65% 85%, #a78bfa 85% 100%);position:relative}
  .ring:after{content:"";position:absolute;inset:20px;border-radius:999px;background:#fff}
  .legend{display:flex;flex-direction:column;gap:.35rem;color:#374151}
  .dot{display:inline-block;width:10px;height:10px;border-radius:999px;margin-right:.35rem}
  .dot.v{background:#3b82f6}
  .dot.s{background:#ef4444}
  .dot.c{background:#a78bfa}
  `]
})
export class ReportsComponent {}


