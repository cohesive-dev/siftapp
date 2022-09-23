import React, { useState } from 'react';
import AppCard from '@sift/components/AppCard';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import AppList from '@sift/components/AppList';
import CourseCell from './CourseCell';
import { useIntl } from 'react-intl';

import { CoursesType } from '@sift/models/dashboards/Academy';

type MyCoursesProps ={
  courses: CoursesType;
}

const MyCourses: React.FC<MyCoursesProps> = ({ courses }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    courses.categories[0].slug
  );

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['academy.myCourses'] as string}
      contentStyle={{ px: 0 }}
    >
      <Box
        sx={{
          mb: 2,
          px: 5,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {courses.categories.map((item, index) => (
          <Box
            sx={{
              mr: 3,
              mb: 1,
            }}
            key={index}
          >
            <Chip
              onClick={() => handleChangeCategory(item.slug)}
              sx={{
                cursor: 'pointer',
                backgroundColor: (theme) =>
                  item.slug === selectedCategory
                    ? theme.palette.primary.main
                    : theme.palette.background.default,
                color: (theme) =>
                  item.slug === selectedCategory
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.primary,
                '&:hover, &:focus': {
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.primary.contrastText,
                },
              }}
              key={index}
              label={item.title}
            />
          </Box>
        ))}
      </Box>
      <AppList
        animation="transition.slideRightBigIn"
        data={courses.courses}
        renderRow={(data, index) => <CourseCell key={index} course={data} />}
      />
    </AppCard>
  );
};

export default MyCourses;
