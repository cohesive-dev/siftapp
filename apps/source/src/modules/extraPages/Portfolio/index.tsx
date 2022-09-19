import React from 'react';
import Portfolio from '@sift/modules/extraPages/Portfolio';
import { photos } from '@sift/fakedb/data';

const PortFolioPage = () => {
  return <Portfolio photos={photos} />;
};

export default PortFolioPage;
