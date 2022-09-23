import React from 'react';
import EarningGraph from './EarningGraph';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Categories from './Categories';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import { EarningGraphType } from '@sift/models/dashboards/CRM';

type MonthlyEarningProps ={
  earningGraphData: EarningGraphType[];
}

export const MonthlyEarning: React.FC<MonthlyEarningProps> = ({
  earningGraphData,
}) => {
  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['dashboard.earningInMonth'] as string}
    >
      <Box
        sx={{
          '& text': {
            fill: (theme) => theme.palette.text.primary,
          },
        }}
      >
        <EarningGraph earningGraphData={earningGraphData} />
      </Box>
      <Divider />
      <Box
        sx={{
          pt: 3,
        }}
      >
        <List>
          {earningGraphData.map((category) => {
            if (category.name !== '') {
              return <Categories category={category} key={category.name} />;
            }
            return null;
          })}
        </List>
      </Box>
    </AppCard>
  );
};

export default MonthlyEarning;
