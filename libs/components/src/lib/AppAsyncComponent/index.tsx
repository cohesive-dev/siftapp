import dynamic, { DynamicOptions, Loader } from 'next/dynamic';
import React from 'react';
import AppLoader from '../AppLoader';

const AppAsyncComponent = (
  importComponent: DynamicOptions | Loader,
  other?: DynamicOptions
) => {
  return dynamic(importComponent, {
    loading: () => <AppLoader />,
    ...other,
  });
};
export default AppAsyncComponent;
