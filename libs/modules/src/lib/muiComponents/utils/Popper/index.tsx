import React from 'react';
import AppComponentHeader from '@sift/components/AppComponentHeader';
import AppGridContainer from '@sift/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@sift/components/AppComponentCard';

import SimplePopper from './SimplePopper';

import SimplePopperSource from 'raw-loader!./SimplePopper';

import TransitionsPopper from './TransitionsPopper';

import TransitionsPopperSource from 'raw-loader!./TransitionsPopper';

import PositionedPopper from './PositionedPopper';

import PositionedPopperSource from 'raw-loader!./PositionedPopper';

import VirtualElementPopper from './VirtualElementPopper';

import VirtualElementPopperSource from 'raw-loader!./VirtualElementPopper';
import PopperPopupState from './PopperPopupState';

import PopperPopupStateSource from 'raw-loader!./PopperPopupState';

const Popper = () => {
  return (
    <>
      <AppComponentHeader
        title="Popper"
        description="A Popper can be used to display some content on top of another. Its an alternative to react-popper."
        refUrl="https://mui.com/components/popper/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Simple Popper"
            component={SimplePopper}
            source={SimplePopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Transitions Popper"
            component={TransitionsPopper}
            source={TransitionsPopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="PositionedPopper"
            component={PositionedPopper}
            source={PositionedPopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="VirtualElementPopper"
            component={VirtualElementPopper}
            source={VirtualElementPopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="PopperPopupState"
            component={PopperPopupState}
            source={PopperPopupStateSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Popper;
