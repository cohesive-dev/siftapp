import React from 'react';
import AppComponentHeader from '@sift/components/AppComponentHeader';
import AppGridContainer from '@sift/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@sift/components/AppComponentCard';
import InlinePicker from './Inline';
import InlinePickerSource from 'raw-loader!./Inline';
import InlineSource from 'raw-loader!./Inline';
import DNDPicker from './DNDPicker';

const FileStack = () => {
  return (
    <>
      <AppComponentHeader
        title="Filestack File Uploader & File Upload API"
        description="Simple file uploader & powerful APIs to upload, transform & deliver any file into your app."
        refUrl="https://www.filestack.com/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="Inline Picker"
            component={InlinePicker}
            source={InlinePickerSource}
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Drop Pane Picker"
            component={DNDPicker}
            source={InlineSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default FileStack;
