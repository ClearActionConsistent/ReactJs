import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { modalStyle, modalTheme, styleButton } from './style';
import CloseIcon from '@mui/icons-material/Close';
import TextFields from '../../../components/TextField';

const MemberModal = ({ isShow, onClose }) => {
    const [open, setOpen] = useState(isShow);
    const [role, setRole] = useState(1);
    const [gender, setGender] = useState(1);
    const [status, setStatus] = useState(1);

    const handleChangeRole = (event) => {
        setRole(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    useEffect(() => {
        setOpen(isShow);
    }, [isShow]);

    return (
        <div>
            <Modal
                open={open}
            >
                <Box sx={modalStyle}>
                    <div className='flex justify-between'>
                        <div />
                        <Typography align='center' variant="h5" component="h2">
                            Member Information
                        </Typography>
                        <CloseIcon onClick={() => onClose()} />
                    </div>
                    <div className='mt-10 grid grid-cols-2'>
                        <div>
                            <TextFields name='User Email' required={true} ml='26px' />
                            <TextFields name='Full Name' required={true} ml='32px' />
                            <div className='flex items-center text-lg  font-serif'>
                                <p className='m-2'>Role <span className='text-red-600 ml-1'>*</span></p>
                                <Box
                                    sx={{
                                        "& .MuiInputBase-root": { m: 1, width: '250px' },
                                        marginLeft: '80px'
                                    }}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={role}
                                            onChange={handleChangeRole}
                                            size='small'
                                        >
                                            <MenuItem value={1}>Super Admin</MenuItem>
                                            <MenuItem value={2}>Admin</MenuItem>
                                            <MenuItem value={3}>Coach</MenuItem>
                                            <MenuItem value={4}>Member</MenuItem>
                                            <MenuItem value={5}>Customer Service</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <TextFields name='Comunity Group' required={false} />
                        </div>
                        <div>
                            <TextFields name='Birth Year' required={true} ml='22px' />
                            <div className='flex items-center text-lg  font-serif'>
                                <p className='m-2'>Gender <span className='text-red-600 ml-1'>*</span></p>
                                <Box
                                    sx={{
                                        "& .MuiInputBase-root": { m: 1, width: '250px' },
                                        marginLeft: '44px'
                                    }}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={gender}
                                            onChange={handleChangeGender}
                                            size='small'
                                        >
                                            <MenuItem value={1}>Male</MenuItem>
                                            <MenuItem value={2}>Female</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <TextFields name='Phone Number' required={false} />
                            <div className='flex items-center text-lg  font-serif'>
                                <p className='m-2'>Profile Status<span className='text-red-600 ml-1'>*</span></p>
                                <Box
                                    sx={{
                                        "& .MuiInputBase-root": { m: 1, width: '250px' },
                                        marginLeft: '1px'
                                    }}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={status}
                                            onChange={handleChangeStatus}
                                            size='small'
                                            sx={status == 1 ? { backgroundColor: '#08a848', color: 'white' } : { backgroundColor: 'gray', color: 'white' }}
                                        >
                                            <MenuItem value={1}>Active</MenuItem>
                                            <MenuItem value={2}>Deactive</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-evenly mt-10'>
                        <ThemeProvider theme={modalTheme}>
                            <Button variant="outlined" color='cancel' sx={styleButton} onClick={() => onClose()} >Cancel</Button>
                            <Button variant="contained" color='save' sx={styleButton} onClick={() => onClose()} >Save</Button>
                        </ThemeProvider>
                    </div>
                </Box>
            </Modal>
        </div >
    )
}

export default MemberModal;