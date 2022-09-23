import {
  CartItemsType,
  CustomersDataType,
  FilterDataType,
  ProductDataType,
  RecentOrdersType,
  VIEW_TYPE,
} from '../models/ecommerce/EcommerceApp';

export const GET_CART_ITEM = 'GET_CART_ITEM';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const GET_ECOMMERCE_LIST = 'GET_ECOMMERCE_LIST';
export const GET_RECENT_ORDER = 'GET_RECENT_ORDER';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const SET_FILTER_DATA = 'SET_FILTER_DATA';
export const SET_PRODUCT_DATA = 'SET_PRODUCT_DATA';
export const SET_PRODUCT_VIEW_TYPE = 'SET_PRODUCT_VIEW_TYPE';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export type GetEcommerceAction = {
  type: typeof GET_ECOMMERCE_LIST;
  payload: ProductDataType[];
};

export type SetProductDetailAction = {
  type: typeof SET_PRODUCT_DATA;
  payload: ProductDataType;
};

export type GetRecentOrdersAction = {
  type: typeof GET_RECENT_ORDER;
  payload: {
    data: RecentOrdersType[];
    count: number;
  };
};

export type GetCustomersAction = {
  type: typeof GET_CUSTOMERS;
  payload: { customers: CustomersDataType[]; customerCount: number };
};

export type GetCartItemsAction = {
  type: typeof GET_CART_ITEM;
  payload: CartItemsType[];
};

export type AddCartItemsAction = {
  type: typeof ADD_CART_ITEM;
  payload: ProductDataType;
};

export type RemoveCartItemsAction = {
  type: typeof REMOVE_CART_ITEM;
  payload: CartItemsType;
};

export type UpdateCartItemsAction = {
  type: typeof UPDATE_CART_ITEM;
  payload: CartItemsType;
};

export type SetProductViewTypeAction = {
  type: typeof SET_PRODUCT_VIEW_TYPE;
  payload: VIEW_TYPE;
};

export type SetFilterDataAction = {
  type: typeof SET_FILTER_DATA;
  payload: FilterDataType;
};

export type EcommerceActionTypes =
  | GetEcommerceAction
  | SetProductDetailAction
  | GetRecentOrdersAction
  | GetCustomersAction
  | GetCartItemsAction
  | AddCartItemsAction
  | RemoveCartItemsAction
  | UpdateCartItemsAction
  | SetProductViewTypeAction
  | SetFilterDataAction;
