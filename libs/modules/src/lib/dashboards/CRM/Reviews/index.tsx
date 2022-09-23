import React from 'react';
import ReviewsGraph from './ReviewsGraph';
import IntlMessages from '@sift/helpers/IntlMessages';
import Box from '@mui/material/Box';
import { green, teal } from '@mui/material/colors';
import { Fonts } from '@sift/constants/AppEnums';
import AppCard from '@sift/components/AppCard';
import { ReviewGraphType } from '@sift/models/dashboards/CRM';

type ReviewsProps= {
  reviewGraphData: ReviewGraphType[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviewGraphData }) => {
  return (
    <AppCard sxStyle={{ backgroundColor: teal[600], color: 'white' }}>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box>
          <Box
            component="h3"
            sx={{
              mb: 1,
              fontWeight: Fonts.BOLD,
              fontSize: 16,
            }}
          >
            <IntlMessages id="common.reviews" />
          </Box>
          <Box
            component="h4"
            sx={{
              mb: 2,
              fontWeight: Fonts.MEDIUM,
              fontSize: { xs: 18, xl: 20 },
              color: green[300],
            }}
          >
            34,042
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 14,
            }}
          >
            <IntlMessages id="dashboard.reviewText" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mb: -16,
        }}
      >
        <ReviewsGraph reviewGraphData={reviewGraphData} />
      </Box>
    </AppCard>
  );
};

export default Reviews;
