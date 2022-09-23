export type BrandDataType = {
  id: number;
  name: string;
};

export type ProductColorsType = {
  BLUE: string;
  GREY: string;
  PARROT: string;
  LIGHT_PINK: string;
  PINK: string;
};

export type IdealForType = {
  id: number;
  name: string;
};

export type AddressesType = {
  id: number;
  name: string;
  mobile: string;
  addressLine: string;
  city: string;
  pin: string;
};

export type DiscountListType = {
  id: number;
  name: string;
};

export type CartItemsType = {
  id: number;
  title: string;
  mrp: string;
  discount: string;
  brand?: number | string;
  image: string;
  count: number;
};

export type ProductDataType = {
  id: number;
  title: string;
  description?: string;
  price?: string;
  mrp: string;
  discount: string;
  rating?: number;
  ideaFor?: number;
  brand?: number | string;
  color?: string;
  reviews?: number;
  image: {
    id: number;
    src: string;
  }[];
};

export type RecentOrdersType = {
  id: string;
  customer: string;
  product: string;
  date: string;
  paymentType: string;
  price: string;
  status: string;
};

export type FilterDataType = {
  title: string;
  page?: string | number;
  brand: number[];
  ideaFor: number[];
  discount: number[];
  color: any[];
  rating: number[];
};

export type CustomersDataType = {
  id: number;
  name: string;
  email: string;
  lastItem: string;
  lastOrder: string;
  rating: string;
  balance: string;
  address: string;
  joinDate: string;
};

export enum VIEW_TYPE {
  LIST = 1,
  GRID = 2,
}
