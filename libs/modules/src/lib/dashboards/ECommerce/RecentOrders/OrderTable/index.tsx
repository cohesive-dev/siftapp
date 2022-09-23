import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import TableContainer from '@mui/material/TableContainer';
import { RecentOrderType } from '@sift/models/dashboards/Ecommerce';

type OrderTableProps = {
  orderData: RecentOrderType[];
};

const OrderTable: React.FC<OrderTableProps> = ({ orderData }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {orderData.map((data: any) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
