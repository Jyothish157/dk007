import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShiftService } from '../../services/shift.service';

@Component({
  selector: 'app-shifts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
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


