import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@sift/components/AppTableContainer';
import { DealsTableType } from '@sift/models/dashboards/CRM';

type DealsTableProps ={
  dealsTableData: DealsTableType[];
}

const DealsTable: React.FC<DealsTableProps> = ({ dealsTableData }) => {
  return (
    <AppTableContainer>
      <Table className="table">
        <TableHead
          sx={{
            borderBottom: '0 none',
          }}
        >
          <TableHeading />
        </TableHead>
        <TableBody
          sx={{
            borderBottom: '0 none',
          }}
        >
          {dealsTableData.map((row) => (
            <TableItem row={row} key={row.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default DealsTable;
