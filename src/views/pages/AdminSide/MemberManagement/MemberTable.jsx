import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { StyledTableCell, StyledTableRow } from './style';
import MemberModal from './MemberModal';

const MemberTable = () => {
    const [showModal, setShowModal] = useState(false)

    const createData = (fullname, username, role, groupName, email, phoneNumber, DOB, weight) => {
        return { fullname, username, role, groupName, email, phoneNumber, DOB, weight };
    }

    const memberdatas = [
        createData('Tino Phan', 'tinophan247', 'Super Admin', 'TMA Group', 'tinophan@gmail.com', '0999888777', '1/1/2000', '75kg'),
        createData('Han Trinh', 'peDau', 'Admin', 'OTF Group', 'hanytrinh@gmail.com', '0987654321', '2/2/1995', '45kg'),
        createData('Anh Phan', 'anhphan123', 'Coach', 'TMA Group', 'anhphan@gmail.com', '0999777666', '3/3/2000', '80kg'),
        createData('Duc Vo', 'ducvo789', 'Member', 'CT4 Group', 'ducvo@gmail.com', '0999555444', '4/4/2000', '65kg'),
        createData('Huy Nguyen', 'anhHatDe', 'Member', 'PDA Group', 'huynguyen@gmail.com', '0999444333', '5/5/2000', '75kg'),
        createData('Tony Tong', 'tonytong567', 'Customer Service', 'TMA Group', 'tonytong@gmail.com', '0999111222', '6/5/1987', '70kg'),
    ];

    return (
        <div className='mt-5'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Full Name</StyledTableCell>
                            <StyledTableCell align="left">User Name</StyledTableCell>
                            <StyledTableCell align="left">Role</StyledTableCell>
                            <StyledTableCell align="left">Comunity Group</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Phone Number</StyledTableCell>
                            <StyledTableCell align="left">DOB</StyledTableCell>
                            <StyledTableCell align="left">Weight</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {memberdatas.map((data, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    <div onClick={() => setShowModal(true)} className='cursor-pointer hover:text-ct4-orange-start hover:underline'>
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
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {showModal && <MemberModal isShow={showModal} onClose={() => setShowModal(false)} />}
        </div>
    )
}

export default MemberTable