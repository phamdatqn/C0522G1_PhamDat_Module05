export interface Facility {
  id: number;
  img?: string;
  name: string;
  area: number;
  rentalCosts: number;
  maxPerson: number;
  isDelete: boolean;
  rentType: number;
  facilityType: number;
  description?: string;
  room?: string;
  floor?: number;
  areaPool?: number;
  free?: string;
}
