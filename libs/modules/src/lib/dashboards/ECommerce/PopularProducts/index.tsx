import React from 'react';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import ProductCell from './ProductCell';
import AppGrid from '@sift/components/AppGrid';
import AppScrollbar from '@sift/components/AppScrollbar';
import { PopularProductType } from '@sift/models/dashboards/Ecommerce';

type PopularProductsProps = {
  popularProducts: PopularProductType[];
};

const PopularProducts: React.FC<PopularProductsProps> = ({
  popularProducts,
}) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['eCommerce.popularProducts'] as string}
      contentStyle={{ px: 0 }}
    >
      <AppScrollbar sx={{ maxHeight: 280 }}>
        <AppGrid
          data={popularProducts}
          responsive={{
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 2,
          }}
          itemPadding={8}
          renderRow={(data, index) => (
            <ProductCell key={'product-' + index} data={data} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default PopularProducts;
