import AppCard from '@sift/components/AppCard';
import AppList from '@sift/components/AppList';
import React from 'react';
import Box from '@mui/material/Box';
import { Fonts } from '@sift/constants/AppEnums';
import AppLinearProgress from '@sift/components/AppLinearProgress';
import { useIntl } from 'react-intl';

import { alpha } from '@mui/material';

import { ClassDataType } from '@sift/models/dashboards/Academy';

type ClassItemProps ={
  item: ClassDataType;
}

const ClassItem: React.FC<ClassItemProps> = ({ item }) => {
  return (
    <Box
      key={item.id}
      sx={{
        px: 5,
        py: 2,
        display: 'flex',
        alignItems: 'center',
      }}
      className="item-hover"
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          backgroundColor: '#470137',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1,
          padding: 1.5,
        }}
      >
        <img alt="" src={item.icon} />
      </Box>
      <Box
        sx={{
          flex: 1,
          ml: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
              fontWeight: Fonts.REGULAR,
              fontSize: 14,
              mr: 1,
            }}
            component="h3"
          >
            {item.name}
          </Box>
          <Box
            sx={{
              ml: 'auto',
              color: (theme) => alpha(theme.palette.primary.main, 0.5),
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {item.percent}%
          </Box>
        </Box>
        <Box
          sx={{
            mt: 1,
          }}
        >
          <AppLinearProgress value={item.percent} activeColor="#0A8FDC" />
        </Box>
      </Box>
    </Box>
  );
};

type MyClassProps= {
  classData: ClassDataType[];
}

const MyClass: React.FC<MyClassProps> = ({ classData }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['academy.myClass'] as string}
      contentStyle={{ px: 0 }}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={classData}
        renderRow={(data, index) => <ClassItem key={index} item={data} />}
      />
    </AppCard>
  );
};

export default MyClass;
