import React from 'react'
import { StyledTableCell, StyledTableRow } from './style';

const MemberTR = ({ data, handleOpen }) => {

    return (
        <StyledTableRow>
            <StyledTableCell component="th" scope="row">
                <div onClick={() => handleOpen()} className='cursor-pointer hover:text-ct4-orange-start hover:underline'>
                    {data.fullname}
                </div>
            </StyledTableCell>
            <StyledTableCell align="left">{data.username}</StyledTableCell>
            <StyledTableCell align="left">{data.role}</StyledTableCell>
            <StyledTableCell align="left">{data.groupName}</StyledTableCell>
            <StyledTableCell align="left">{data.email}</StyledTableCell>
            <StyledTableCell align="left">{data.phoneNumber}</StyledTableCell>
            <StyledTableCell align="left">{data.DOB}</StyledTableCell>
            <StyledTableCell align="left">{data.weight}</StyledTableCell>
        </StyledTableRow>
    )
}

export default MemberTR;