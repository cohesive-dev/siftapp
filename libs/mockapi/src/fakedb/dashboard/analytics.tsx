import { blue, green, grey, red } from '@mui/material/colors';
import { AnalyticsType } from '@sift/models/dashboards/Analytics';

const analyticsData: AnalyticsType = {
  welcomeCard: [
    {
      id: 1,
      type: 'Total Investments',
      counts: 350,
      icon: 'RiMoneyDollarBoxLine',
    },
    {
      id: 2,
      type: 'Active',
      counts: 280,
      icon: 'BsCheckSquare',
    },
    {
      id: 3,
      type: 'Exit',
      counts: 70,
      icon: 'MdOutlineExitToApp',
    },
  ],
  earningGraphData: [
    { name: 'Clean Energies', value: 18756, color: '#E53E3E', colorName: red[600] },
    { name: 'Healthcare', value: 5599, color: '#38A169', colorName: green[600] },
    { name: 'IT & Technologies', value: 4987, color: '#4299E1', colorName: blue[500] },
    { name: 'D2C', value: 4987, color: '#ff9d00', colorName: '#ff9d00'},
    { name: 'Others', value: 16000, color: '#CBD5E0', colorName: grey[500] },
  ],
  revenueCards: [
    {
      id: 1,
      type: 'Total Holding',
      value: '$280M',
      growth: 2.5,
      icon: 'BsWallet2',
      strokeColor: '#f44d50',
      graphData: [
        { month: 'Aug', number: 310 },
        { month: 'Sep', number: 130 },
        { month: 'Oct', number: 350 },
        { month: 'Nov', number: 170 },
        { month: 'Dec', number: 400 },
      ],
    },
    {
      id: 2,
      type: 'Unrealized Gain',
      value: '$122M',
      growth: 3.7,
      icon: 'MdOutlineShowChart',
      strokeColor: '#f49820',
      graphData: [
        { month: 'Jan', number: 20 },
        { month: 'Feb', number: 170 },
        { month: 'Mar', number: 40 },
        { month: 'Apr', number: 200 },
        { month: 'May', number: 70 },
      ],
    },
  ],
  salesState: [
    {
      id: 1,

      amount: '3510',
      type: 'Author Sales',
      icon: '/assets/images/dashboard/auther_sales.svg',
    },
    {
      id: 2,
      amount: '3.2M',
      type: 'All Time Revenue',
      icon: '/assets/images/dashboard/all_time_sales.svg',
    },
    {
      id: 3,
      amount: '390',
      type: 'Commissions',
      icon: '/assets/images/dashboard/commission_sale.svg',
    },
  ],

  salesChartData: [
    {
      name: 'Jan',
      "Seed": 2,
      "Series A": 5,
      "Series B": 10,
      "Late stages": 0
    },
    {
      name: 'Feb',
      "Seed": 0,
      "Series A": 0,
      "Series B": 0,
      "Late stages": 20
    },
    {
      name: 'Mar',
      "Seed": 2.5,
      "Series A": 12.5,
      "Series B": 50,
      "Late stages": 9
    },
    {
      name: 'Apr',
      "Seed": 8,
      "Series A": 12,
      "Series B": 0,
      "Late stages": 80
    },
    {
      name: 'May',
      "Seed": 2,
      "Series A": 15,
      "Series B": 40,
      "Late stages": 22
    },
    {
      name: 'June',
      "Seed": 0,
      "Series A": 0,
      "Series B": 0,
      "Late stages": 20
    },
    {
      name: 'Jul',
      "Seed": 15,
      "Series A": 0,
      "Series B": 0,
      "Late stages": 25
    },
  ],

  visitorsPageView: [
    { name: '15 May', Page: 150, Visitor: 270 },
    { name: '16 May', Page: 250, Visitor: 200 },
    { name: '17 May', Page: 180, Visitor: 280 },
    { name: '18 May', Page: 278, Visitor: 250 },
    { name: '19 May', Page: 250, Visitor: 300 },
    { name: '20 May', Page: 350, Visitor: 250 },
    { name: '21 May', Page: 280, Visitor: 300 },
    { name: '21 May', Page: 340, Visitor: 240 },
    { name: '21 May', Page: 280, Visitor: 300 },
    { name: '21 May', Page: 400, Visitor: 270 },
  ],
  activeVisitors: {
    growth: 4,
    value: 4788,
    slug: 'Active Visitors right now',
    graphData: [
      { time: '1', value: 823 },
      { time: '2', value: 635 },
      { time: '3', value: 900 },
      { time: '4', value: 760 },
      { time: '5', value: 874 },
      { time: '6', value: 575 },
      { time: '7', value: 800 },
      { time: '8', value: 680 },
      { time: '9', value: 830 },
      { time: '10', value: 920 },
      { time: '11', value: 823 },
      { time: '22', value: 635 },
      { time: '23', value: 900 },
      { time: '24', value: 760 },
      { time: '25', value: 874 },
      { time: '26', value: 575 },
      { time: '27', value: 800 },
      { time: '28', value: 680 },
      { time: '29', value: 823 },
      { time: '30', value: 920 },
      { time: '31', value: 823 },
      { time: '32', value: 635 },
    ],
  },
  topSellingProduct: [
    {
      id: 1,
      icon: '/assets/images/dashboard/product_image_1.png',
      name: 'Antler Theme',
      description: 'Reference site about.',
      price: 6790,
      rate: 80,
      color: '#F44C51',
    },
    {
      id: 1,
      icon: '/assets/images/dashboard/product_image_2.png',
      name: 'Live Chat Support',
      description: 'information on its origins.',
      price: 4430,
      rate: 64,
      color: '#0A99EB',
    },
    {
      id: 1,
      icon: '/assets/images/dashboard/product_image_3.png',
      name: 'Puzzle Mask',
      description: 'information Lipsum generator.',
      price: 2330,
      rate: 55,
      color: '#58BE1E',
    },
  ],
  earningData: [
    {
      id: 1,
      color: 'green',
      amount: 4855,
      country: 'Japan',
    },
    {
      id: 2,
      color: 'orange',
      amount: 1598,
      country: 'India',
    },
    {
      id: 3,
      color: 'blue',
      amount: 866,
      country: 'Australia',
    },
    {
      id: 4,
      color: 'red',
      amount: 2534,
      country: 'USA',
    },
  ],
  tickets: [
    {
      id: 1,
      name: 'Support Tickets',
      opened: 50,
      overAllPercentage: {
        open: 65,
        close: 87,
        hold: 56,
      },
    },
    {
      id: 2,
      name: 'Sales Tickets',
      opened: 50,
      overAllPercentage: {
        open: 65,
        close: 87,
        hold: 56,
      },
    },
    {
      id: 3,
      name: 'Support Tickets',
      opened: 50,
      overAllPercentage: {
        open: 65,
        close: 87,
        hold: 56,
      },
    },
  ],
  pageVisits: [
    {
      id: 1,
      page: '/dashboard/index.html',
      pageView: 322,
      visitors: 132,
    },
    {
      id: 2,
      page: '/products/index.html',
      pageView: 234,
      visitors: 232,
    },
    {
      id: 3,
      page: '/listing/index.html',
      pageView: 435,
      visitors: 654,
    },
    {
      id: 4,
      page: '/invoces/index.html',
      pageView: 255,
      visitors: 633,
    },
    {
      id: 5,
      page: '/details/index.html',
      pageView: 223,
      visitors: 233,
    },
    {
      id: 6,
      page: '/delivered/index.html',
      pageView: 565,
      visitors: 645,
    },
    {
      id: 7,
      page: '/cancelled/index.html',
      pageView: 333,
      visitors: 354,
    },
    {
      id: 8,
      page: '/in-transit/index.html',
      pageView: 343,
      visitors: 567,
    },
    {
      id: 9,
      page: '/delivered/index.html',
      pageView: 565,
      visitors: 645,
    },
    {
      id: 10,
      page: '/cancelled/index.html',
      pageView: 333,
      visitors: 354,
    },
    {
      id: 11,
      page: '/in-transit/index.html',
      pageView: 343,
      visitors: 567,
    },
  ],
  transactionData: [
    {
      id: '#SK231',
      customer: 'Ina Hughes',
      date: '08-21-2020',
      paymentType: 'COD',
      status: 'In Transit',
    },
    {
      id: '#SK232',
      customer: 'Myrtie Ferguson',
      date: '08-12-2020',
      paymentType: 'Prepaid',
      status: 'Delivered',
    },
    {
      id: '#SK233',
      customer: 'Johnny Herrera',
      date: '07-30-2020',
      paymentType: 'Prepaid',
      status: 'In Transit',
    },
    {
      id: '#SK234',
      customer: 'Barbara Bowers',
      date: '07-25-2020',
      paymentType: 'COD',
      status: 'Delivered',
    },
    {
      id: '#SK235',
      customer: 'Annie Herrera',
      date: '07-11-2020',
      paymentType: 'Refunded',
      status: 'In Transit',
    },
    {
      id: '#SK236',
      customer: 'Ann Herrington',
      date: '06-21-2020',
      paymentType: 'COD',
      status: 'Return',
    },
    {
      id: '#SK237',
      customer: 'Ina Hughes',
      date: '06-12-2020',
      paymentType: 'COD',
      status: 'In Transit',
    },
  ],
  infoWidgets: [
    {
      id: 1,
      icon: '/assets/images/dashboard/icon_phone.svg',
      count: '5,623',
      details: 'Mobile Devices',
    },
    {
      id: 2,
      icon: '/assets/images/dashboard/teblets.svg',
      count: '1,234',
      details: 'Teblets',
    },
    {
      id: 3,
      icon: '/assets/images/dashboard/icon_desktop.svg',
      count: '7,632',
      details: 'Desktop',
    },
  ],

  trafficData: [
    {
      id: 1,
      title: 'Organic Search',
      value: 78,
      session: 10853,
    },
    { id: 2, title: 'Direct', value: 90, session: 12323 },
    {
      id: 3,
      title: 'Referral',
      value: 25,
      session: 1231,
    },
    { id: 4, title: 'Email', value: 40, session: 5454 },
    {
      id: 5,
      title: 'Social',
      value: 55,
      session: 6755,
    },
    {
      id: 6,
      title: 'Advertise',
      value: 70,
      session: 9853,
    },
    {
      id: 7,
      title: 'Referral',
      value: 25,
      session: 1231,
    },
  ],
};
export default analyticsData;
