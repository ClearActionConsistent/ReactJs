import React from 'react'
import { sportData } from '../../../../constants';
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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
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
                  {sportData.map((item, index) =>
                  (
                    <GroupTR item={item} key={index} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className='flex justify-end m-4'>
            <p className='font-barlow text-sm mr-4 flex items-center'>1-50 of 500</p>
            <Paginations />
          </div>
        </div>
      </PageLayout>
    </div>
  )
};

export default GroupManagement;