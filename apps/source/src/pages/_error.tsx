import asyncComponent from '@sift/components/AppAsyncComponent';

export default asyncComponent(() =>
  import('../modules/errorPages/Error404')
);
