export interface EstablishmentDataModel {
  establishment: Establishment;
  categories: CategoryDataModel[];
}

export interface CategoryDataModel {
  category: Category;
  menuItems: MenuItem[];
  categoryOptions: CategoryOptions[];
}

export interface Establishment {
  id: number;
  name: string;
  address: string;
  phone: string;
  website: string;
  description?: string;
  imageUrl?: string;
  dateAdded: Date;
  categories?: Category[];
}

export interface Category {
  id: number;
  name: string;
  isEnabled: boolean;
  establishmentId: number;
  establishment?: Establishment;
  menuItems?: MenuItem[];
  recurrenceDays?: CategoryRecurrenceDay[];
}

export interface CategoryOptions {
  id: number;
  name: string;
  price: number;
  description: string;
  establishmentId: number;
  establishment?: Establishment;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  isEnabled: boolean;
  categoryId: number;
  category?: Category; // Assuming you have a Category interface
  categoryOptions?: CategoryOptions[];
  recurrenceDays?: MenuItemRecurrenceDay[];
}

export interface MenuItemRecurrenceDay {
  id: number;
  day: DayOfWeek;
  menuItemId: number;
  menuItem?: MenuItem; // Assuming you have a MenuItem interface
}

export interface CategoryRecurrenceDay {
  id: number;
  day: DayOfWeek;
  categoryId: number;
  category?: Category; // Assuming you have a Category interface
}

export enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}