import React from 'react'
import { groupData } from '../../../../constants';
import FilterIcon from '../../../components/Icons/filter-icon';
import PageLayout from '../../../components/PageLayout';
import SearchFields from '../../../components/SearchFields';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { StyledTableCell } from './style';
import GroupTR from './groupTR';
import Paginations from '../../../components/Pagination';
import TotalResult from '../../../components/Pagination/total-result';

const GroupManagement = () => {
  return (
    <div>
      <PageLayout>
        <div>
          <div className='flex justify-between'>
            <p className='uppercase font-barlow-medium text-28'>Groups</p>
            <button className='uppercase w-189 h-10 bg-ct4-green-neon font-barlow-medium text-sm rounded'>Create a New Group</button>
          </div>
          <div className='flex justify-between mt-4 font-barlow text-sm'>
            <SearchFields />
            <div className='cursor-pointer'>
              <FilterIcon />
            </div>
          </div>
          <div className='mt-4'>
            <TableContainer sx={{ maxHeight: 640 }} component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead >
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell align="left">GROUP NAME</StyledTableCell>
                    <StyledTableCell align="left">DESCRIPTION</StyledTableCell>
                    <StyledTableCell align="left">LOCATION</StyledTableCell>
                    <StyledTableCell align="left">SPORT</StyledTableCell>
                    <StyledTableCell align="left">GROUP TYPE</StyledTableCell>
                    <StyledTableCell align="left">CREATED DATE</StyledTableCell>
                    <StyledTableCell align="left">TOTAL RUNNERS</StyledTableCell>
                    <StyledTableCell align="left">ACTIVE</StyledTableCell>
                    <StyledTableCell align="left">ACTION</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {groupData.map((item, index) =>
                  (
                    <GroupTR item={item} key={index} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className='flex items-center justify-end m-4'>
            <TotalResult total={500} limit={50} />
            <Paginations count={10} />
          </div>
        </div>
      </PageLayout>
    </div>
  )
};

export default GroupManagement;