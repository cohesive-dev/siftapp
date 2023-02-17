import React from 'react';
import AppPage from '../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';
import AppPageMeta from '@sift/components/AppPageMeta';

const HealthCare = asyncComponent(() =>
  import('../../modules/dashboards/HealthCare')
);

export default AppPage((props) => {
  return (
    <React.Fragment>
      <AppPageMeta title="Health Care | Sift " />
      <HealthCare />
    </React.Fragment>
  );
});

