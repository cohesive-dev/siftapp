import { PaletteColorOptions } from '@mui/material';

export type DealsTableType = {
  id: number;
  name: string;
  progress: string;
  type: string;
  amount: string;
  created: string;
  logo: string;
};

export type EarningGraphType = {
  name: string;
  value: number;
  color: string;
  colorName: PaletteColorOptions | string;
};

export type ProgressGraphType = {
  name: string;
  actual: number;
  progress: number;
};

export type QuickStatsType = {
  clientsData: {
    count: string;
  };
  invoiceData: {
    count: string;
  };
  totalProjectsData: {
    count: string;
  };
  openProjectsData: {
    count: string;
  };
};

export type RevenueType = {
  ytdRevenue: string;
  clients: number;
  countries: string;
  clientsColor: string;
  countriesColor: string;
  revenueGraphData: ReviewGraphType[];
};

export type ReviewGraphType = {
  name: string;
  revenue?: number;
  revenue1?: number;
  value?: number;
};

export type SocialMediaType = {
  id: number;
  name: string;
  revenue: number;
  change: number | string;
  color: string;
  changeColor: string;
};

export type StatisticType = {
  month: string;
  number: number;
};

export type StatisticsGraphType = {
  projectData: StatisticType[];
  clientsData: StatisticType[];
  incomeData: StatisticType[];
};

export type TicketSupportDataType = {
  id: number;
  name: string;
  ticketId: string;
  created: string;
  contact: string;
  image: string;
};

export type TodayTaskType = {
  id: number;
  task: string;
  date: string;
  isChecked: boolean;
};

export type WebsiteTrafficType = {
  month: string;
  users: number;
};

export type CRMType = {
  dealsTableData: DealsTableType[];
  earningGraphData: EarningGraphType[];
  progressGraphData: ProgressGraphType[];
  quickStatsData: QuickStatsType;
  revenueData: RevenueType;
  reviewGraphData: ReviewGraphType[];
  socialMediaData: SocialMediaType[];
  statisticsGraph: StatisticsGraphType;
  ticketSupportData: TicketSupportDataType[];
  todayTaskData: TodayTaskType[];
  websiteTrafficData: WebsiteTrafficType[];
};
