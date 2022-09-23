import React from 'react';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import FroalaEditor from 'react-froala-wysiwyg';
import { Box } from '@mui/material';

const SampleEditor = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        '& .fr-box.fr-basic': {
          width: '100%',
        },
      }}
    >
      <FroalaEditor />
    </Box>
  );
};

export default SampleEditor;
