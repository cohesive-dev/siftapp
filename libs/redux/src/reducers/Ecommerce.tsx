import {
  CartItemsType,
  CustomersDataType,
  FilterDataType,
  ProductDataType,
  RecentOrdersType,
} from '@sift/models/ecommerce/EcommerceApp';
import {
  ADD_CART_ITEM,
  GET_CUSTOMERS,
  GET_ECOMMERCE_LIST,
  GET_RECENT_ORDER,
  REMOVE_CART_ITEM,
  SET_FILTER_DATA,
  SET_PRODUCT_DATA,
  SET_PRODUCT_VIEW_TYPE,
  UPDATE_CART_ITEM,
} from '@sift/actions/Ecommerce.action';
import { AppActions } from '@sift/actions';
import { cartItems } from '@sift/fakedb/data';

export enum VIEW_TYPE {
  LIST = 1,
  GRID = 2,
}

const initialState: {
  ecommerceList: ProductDataType[];
  viewType: number;
  currentProduct: ProductDataType | null;
  orderCount: number;
  filterData: FilterDataType;
  cartItems: CartItemsType[];
  recentOrders: RecentOrdersType[];
  customers: CustomersDataType[];
  customerCount: number;
} = {
  ecommerceList: [],
  viewType: VIEW_TYPE.LIST,
  currentProduct: null,
  orderCount: 0,
  filterData: {
    title: '',
    brand: [],
    ideaFor: [],
    discount: [],
    color: [],
    rating: [],
  },
  cartItems: cartItems,
  recentOrders: [],
  customers: [],
  customerCount: 0,
};

const Ecommerce = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case GET_ECOMMERCE_LIST:
      return {
        ...state,
        ecommerceList: action.payload,
      };
    case SET_PRODUCT_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload,
      };

    case SET_FILTER_DATA:
      return {
        ...state,
        filterData: action.payload,
      };

    case SET_PRODUCT_DATA:
      return {
        ...state,
        currentProduct: action.payload,
      };

    case GET_RECENT_ORDER:
      return {
        ...state,
        recentOrders: action.payload.data,
        orderCount: action.payload.count,
      };

    // case SET_CART_ITEMS:
    //   return {
    //     ...state,
    //     cartItems: action.payload,
    //   };

    case UPDATE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case ADD_CART_ITEM: {
      let cartItems: CartItemsType[] = [];
      if (state.cartItems.some((item) => +item.id === +action.payload.id)) {
        cartItems = state.cartItems.map((item) => {
          if (+item.id === +action.payload.id) {
            item.count = +item.count + 1;
          }
          return item;
        });
        return {
          ...state,
          cartItems: cartItems,
        };
      } else {
        const cartData: CartItemsType = {
          id: action.payload.id,
          title: action.payload.title,
          mrp: action.payload.mrp,
          discount: action.payload.discount,
          brand: action.payload.brand,
          image: action.payload.image[0].src,
          count: 1,
        };
        cartItems = state.cartItems.concat(cartData);
        return {
          ...state,
          cartItems: cartItems,
        };
      }
    }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload.customers,
        customerCount: action.payload.customerCount,
      };

    default:
      return state;
  }
};
export default Ecommerce;
