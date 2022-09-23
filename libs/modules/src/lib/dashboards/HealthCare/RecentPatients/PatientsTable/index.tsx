import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@sift/components/AppTableContainer';
import { RecentPatientType } from '@sift/models/dashboards/HealthCare';

type RecentPatientsProps = {
  recentPatients: RecentPatientType[];
};

const PatientsTable: React.FC<RecentPatientsProps> = ({ recentPatients }) => {
  return (
    <AppTableContainer>
      <Table className="table">
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {recentPatients.map((data: any) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default PatientsTable;
