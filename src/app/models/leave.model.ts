export type LeaveType = 'Sick' | 'Vacation' | 'Casual';

export interface LeaveRequest {
  created: string;
  type: LeaveType;
  from: string;
  to: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface LeaveBalanceItem {
  type: LeaveType;
  balanceDays: number;
}


