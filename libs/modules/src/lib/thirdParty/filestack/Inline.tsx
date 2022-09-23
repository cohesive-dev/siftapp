import React from 'react';
import { PickerInline } from 'filestack-react';
import { fileStackKey } from '@sift/constants/AppConst';

const Inline = () => {
  return <PickerInline apikey={fileStackKey} />;
};

export default Inline;
