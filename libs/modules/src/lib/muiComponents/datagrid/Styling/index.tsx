import React from 'react';
import AppComponentHeader from '@sift/components/AppComponentHeader';
import AppGridContainer from '@sift/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@sift/components/AppComponentCard';

import StylingHeaderGrid from './StylingHeaderGrid';

import StylingHeaderGridSource from 'raw-loader!./StylingHeaderGrid';

import StylingRowsGrid from './StylingRowsGrid';

import StylingRowsGridSource from 'raw-loader!./StylingRowsGrid';

import StylingCellsGrid from './StylingCellsGrid';

import StylingCellsGridSource from 'raw-loader!./StylingCellsGrid';

import AntDesignGrid from './AntDesignGrid';

import AntDesignGridSource from 'raw-loader!./AntDesignGrid';
import SxProp from './SxProp';

import SxPropSource from 'raw-loader!./SxProp';

const Styling = () => {
  return (
    <>
      <AppComponentHeader
        title="Styling"
        description="Easily export the rows in various file formats such as CSV, Excel, or PDF."
        refUrl="https://mui.com/components/data-grid/style/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="StylingHeaderGrid"
            component={StylingHeaderGrid}
            source={StylingHeaderGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="StylingRowsGrid"
            component={StylingRowsGrid}
            source={StylingRowsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="StylingCellsGrid"
            component={StylingCellsGrid}
            source={StylingCellsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="AntDesignGrid"
            component={AntDesignGrid}
            source={AntDesignGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Using the Sx Prop"
            component={SxProp}
            source={SxPropSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Styling;
