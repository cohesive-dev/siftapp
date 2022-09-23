import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://cra.cremawork.com';

const defaultTitle = 'Sift - Modern Portfolio Monitoring Solution';
const defaultDescription =
  'Sift is purely based on Material UI components and follows Google’s Material Design guidelines.';
const defaultImage = '';
const defaultTwitter = '@sift';
const defaultSep = ' | ';
type Props = {
  children?: React.ReactNode;

  [key: string]: any;
};
const AppPageMeta = ({ children, ...rest }: Props) => {
  const {
    title,
    description,
    image,
    category = 'Admin Theme',
    tags = ['Material Admin', 'MUI Nextjs'],
  } = rest;
  const theTitle = title
    ? title?.length > 48
      ? title
      : title + defaultSep + defaultTitle
    : defaultTitle;
  const theDescription = description
    ? description.substring(0, 155)
    : defaultDescription;
  const theImage = image ? `${SITE_URL}${image}` : defaultImage;

  return (
    <>
      <NextSeo
        title={theTitle}
        description={theDescription}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: theTitle,
          description: theDescription,
          images: [
            {
              url: theImage,
              width: 800,
              height: 600,
              alt: 'Sift Admin Template',
              type: 'image/jpeg',
            },
            {
              url: theImage,
              width: 900,
              height: 800,
              alt: 'Sift Admin Template',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Sift Admin Template',
        }}
        twitter={{
          handle: defaultTwitter,
          site: '@sift',
          cardType: 'summary_large_image',
        }}
      />
      {children}
    </>
  );
};

export default AppPageMeta;

AppPageMeta.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};
