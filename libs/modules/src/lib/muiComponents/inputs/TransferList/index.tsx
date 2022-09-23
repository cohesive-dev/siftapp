import React from 'react';
import AppComponentHeader from '@sift/components/AppComponentHeader';
import AppGridContainer from '@sift/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@sift/components/AppComponentCard';

import BasicTransferList from './BasicTransferList';

import BasicTransferListSource from 'raw-loader!./BasicTransferList';
import EnhancedTransferList from './EnhancedTransferList';

import EnhancedTransferListSource from 'raw-loader!./EnhancedTransferList';

const TransferList = () => {
  return (
    <>
      <AppComponentHeader
        title="Transfer List"
        description='A transfer data (or "shuttle") enables the user to move one or more data items between lists.'
        refUrl="https://mui.com/components/transfer-data/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="Basic transfer data"
            component={BasicTransferList}
            source={BasicTransferListSource}
            noScrollbar
            description='For completeness, this example includes buttons for "move all", but not every transfer data needs these.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Enhanced transfer data"
            component={EnhancedTransferList}
            source={EnhancedTransferListSource}
            noScrollbar
            description='This example exchanges the "move all" buttons for a "select all / select none" checkbox, and adds a counter.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TransferList;
