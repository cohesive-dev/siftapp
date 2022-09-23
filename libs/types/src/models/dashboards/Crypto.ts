import { PaletteColorOptions } from '@mui/material';

export type CoinGraphType = {
  bitcoin: {
    yearlyData: { month: string; amount: number }[];
    monthlyData: { date: string; amount: number }[];
    weeklyData: { day: string; amount: number }[];
    dailyData: { time: string; amount: number }[];
  };
  litecoin: {
    yearlyData: { month: string; amount: number }[];
    monthlyData: { date: string; amount: number }[];
    weeklyData: { day: string; amount: number }[];
    dailyData: { time: string; amount: number }[];
  };
  ripple: {
    yearlyData: { month: string; amount: number }[];
    monthlyData: { date: string; amount: number }[];
    weeklyData: { day: string; amount: number }[];
    dailyData: { time: string; amount: number }[];
  };
};

export type BuySellDataType = {
  value: string;
  price: string;
  amount: string;
};

export type BuySellType = {
  buyData: BuySellDataType;
  sellData: BuySellDataType;
};

export type CoinType = {
  price: string;
  increment: number;
};

export type CoinsDataType = {
  bitcoin: CoinType;
  etherium: CoinType;
  liteCoin: CoinType;
  ripple: CoinType;
};

export type MarketGraphType = {
  month: string;
  medium: number;
  low: number;
  high: number;
  amt: number;
};

export type NewsDataType = {
  id: number;
  news: string;
  created: string;
  image: string;
  by: string;
};

export type PopularCoinsType = {
  id: number;
  name: string;
  shortName: string;
  marketCap: string;
  volume: string;
  h: string;
  image: string;
  color: PaletteColorOptions | string;
};

export type BalanceCoinsType = {
  id: number;
  name: string;
  value: number;
};

export type TotalBalanceDataType = {
  balance: string;
  coins: BalanceCoinsType[];
};

export type BtcChartDataType = {
  id: number;
  name: string;
  value: number;
  color: string;
};

export type CryptoPropsType = {
  coinGraphData: CoinGraphType;
  buySell: BuySellType;
  coinsData: CoinsDataType;
  marketGraphData: MarketGraphType[];
  newsData: NewsDataType[];
  popularCoins: PopularCoinsType[];
  totalBalanceData: TotalBalanceDataType;
  btcChartData: BtcChartDataType[];
};
