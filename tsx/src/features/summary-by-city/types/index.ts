export interface User {
  nights: number;
  totalAmount: number;
}

export interface City {
  users: Record<string, User>;
  totalNights: number;
  totalAmount: number;
}

export type CityGroup = Record<string, City>;
