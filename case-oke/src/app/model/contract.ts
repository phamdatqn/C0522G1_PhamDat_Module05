export interface Contract {
  id: number;
  startDate?: string;
  endDate?: string;
  deposit: number;
  totalMoney: number;
  isDelete: boolean;
  employeeId?: number;
  customerId?: number;
  facilityId?: number;
  contractDetailsId?: number;
}
