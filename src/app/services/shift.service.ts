import { Injectable, signal } from '@angular/core';
import { ShiftItem } from '../models/shift.model';

@Injectable({ providedIn: 'root' })
export class ShiftService {
  shifts = signal<ShiftItem[]>([
    { date: new Date().toLocaleDateString(), time: 'Morning' },
    { date: new Date(Date.now()+86400000).toLocaleDateString(), time: 'Evening' },
  ]);

  requestSwap(date: string, from: ShiftItem['time'], to: ShiftItem['time']) {
    // Mock action
    console.info('Swap request', { date, from, to });
  }
}


