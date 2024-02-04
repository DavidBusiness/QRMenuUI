export interface EstablishmentDataModel {
  establishmentName: string;
  categories: CategoryDataModel[];
}

export interface CategoryDataModel {
  id: number;
  name: string;
  menuItems: MenuItemDataModel[];
  categoryOptions: CategoryOptionsDataModel[];
}

export interface MenuItemDataModel {
  id: number;
  name: string;
  description: string;
  price: number;
  itemIndicator: number;
}

export interface CategoryOptionsDataModel {
  id: number;
  name: string;
  price: number;
  description: string;
}