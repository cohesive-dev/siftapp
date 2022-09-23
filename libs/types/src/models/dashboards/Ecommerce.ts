export type SalesStateType = {
  id: number;
  type: string;
  value: string;
  bgColor: string;
  icon: string;
};

export type ReportCardsType = {
  id: number;
  type: string;
  value: string;
  growth: number;
  icon: string;
  strokeColor: string;
  graphData: {
    month: string;
    number: number;
  }[];
};

export type PopularProductType = {
  id: number;
  icon: string;
  name: string;
  description: string;
  price: number;
  mrp: number;
};

export type MarketingCampaignType = {
  id: number;
  name: string;
  description: string;
  icon: string;
  graph: number;
  growth: boolean;
  spent: string;
  like?: string;
  share?: string;
};

export type NotificationsType = {
  id: number;
  image: string;
  name: string;
  type: string;
  message: string;
};

export type NewCustomersType = {
  id: number;
  image: string;
  name: string;
  orders: number;
  color: string;
  message: string;
};

export type SiteVisitorType = {
  id: number;
  color: string;
  value: number;
  icon: string;
  country: string;
};

export type BrowserDataType = {
  id: number;
  value: string;
  name: string;
  icon: string;
};

export type RecentOrderType = {
  id: string;
  customer: string;
  product: string;
  date: string;
  paymentType: string;
  price: string;
  status: string;
};

export type EcommerceType = {
  salesState: SalesStateType[];
  reportCards: ReportCardsType[];
  popularProducts: PopularProductType[];
  marketingCampaign: MarketingCampaignType[];
  notifications: NotificationsType[];
  newCustomers: NewCustomersType[];
  siteVisitors: SiteVisitorType[];
  browser: BrowserDataType[];
  recentOrders: RecentOrderType[];
};
