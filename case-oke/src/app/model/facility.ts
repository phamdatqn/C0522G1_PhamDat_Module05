export interface Facility {
  id: number;
  img?: string;
  name: string;
  area: number;
  rentalCosts: number;
  maxPeople: number;
  isDelete: boolean;
  rentType: number;
  facilityType: string;
  description?: string;
  room?: string;
  floor?: number;
  areaPool?: number;
  free?: string;
}
