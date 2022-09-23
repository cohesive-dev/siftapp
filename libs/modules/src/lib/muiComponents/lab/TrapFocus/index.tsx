import React from 'react';
import AppComponentHeader from '@sift/components/AppComponentHeader';
import AppGridContainer from '@sift/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@sift/components/AppComponentCard';

import BasicTrapFocus from './BasicTrapFocus';

import BasicTrapFocusSource from 'raw-loader!./BasicTrapFocus';
import DisableEnforceFocus from './DisableEnforceFocus';

import DisableEnforceFocusSource from 'raw-loader!./DisableEnforceFocus';
import LazyTrapFocus from './LazyTrapFocus';

import LazyTrapFocusSource from 'raw-loader!./LazyTrapFocus';
import PortalTrapFocus from './PortalTrapFocus';

import PortalTrapFocusSource from 'raw-loader!./PortalTrapFocus';
import ContainedToggleTrappedFocus from './ContainedToggleTrappedFocus';

import ContainedToggleTrappedFocusSource from 'raw-loader!./PortalTrapFocus';

const TrapFocus = () => {
  return (
    <>
      <AppComponentHeader
        title="Trap Focus"
        description="Trap focus within a DOM node."
        refUrl="https://mui.com/components/trap-focus/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Example"
            component={BasicTrapFocus}
            source={BasicTrapFocusSource}
            noScrollbar
            description="A basic timeline showing data of events."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Disable enforce focus"
            component={DisableEnforceFocus}
            source={DisableEnforceFocusSource}
            noScrollbar
            description="Clicks within the focus trap behave normally, but clicks outside the focus trap are blocked."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Lazy activation"
            component={LazyTrapFocus}
            source={LazyTrapFocusSource}
            noScrollbar
            description="By default, the component moves the focus to its descendants as soon as it opens: open={true}"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Portal"
            component={PortalTrapFocus}
            source={PortalTrapFocusSource}
            noScrollbar
            description='The following demo uses the Portal component to render a subset of the trap focus children into a new "subtree" outside of the current DOM hierarchy; so that they no longer form part of the focus loop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Portal"
            component={ContainedToggleTrappedFocus}
            source={ContainedToggleTrappedFocusSource}
            noScrollbar
            description="The most common use case for the Focus Trap component is to maintain focus within an Unstyled Modal component that is entirely separate from the element that opens the modal. But you can also create a toggle button for the open prop of the Focus Trap component that is stored inside of the component itself, as shown in the following demo."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TrapFocus;
