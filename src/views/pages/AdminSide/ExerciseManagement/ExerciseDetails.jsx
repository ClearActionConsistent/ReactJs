import React, { useEffect, useState } from 'react'
import { modalTheme, styleButton } from '../MemberManagement/style';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { modalStyleExerciseDetail } from './style';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextArea from '../../../components/TextArea';
import { defaultExerciseLibrary } from '../../../../constants';

const ExerciseDetails = ({ isShow = false, onClose, data }) => {
    const [open, setOpen] = useState(isShow);
    const [group, setGroup] = useState(0)
    const [status, setStatus] = useState(0);
    const [equipment, setEquipment] = useState(0);
    const [focusArea, setFocusArea] = useState(0);
    const [formState, setFormState] = useState(defaultExerciseLibrary);

    const handleChangeGroup = (event) => {
        setGroup(event.target.value);
    };

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleChangeEquipment = (event) => {
        setEquipment(event.target.value);
    };

    const handleChangeFocusArea = (event) => {
        setFocusArea(event.target.value);
    };

    useEffect(() => {
        setOpen(isShow);
    }, [isShow]);

    useEffect(() => {
        setFormState({ ...data });
    }, [data]);


    return (
        <div>
            <Modal
                open={open}
            >
                <Box sx={modalStyleExerciseDetail}>
                    <div className='flex justify-between'>
                        <div />
                        <Typography align='center' variant="h5" component="h2" >
                            {formState.name}
                        </Typography>
                        <CloseIcon onClick={() => onClose()} />
                    </div>
                    <div className='flex w-650 justify-center mt-2'>
                        <img className='border border-gray-700 border-double w-500 h-320 rounded-xl my-2' src={formState.img} />
                    </div>
                    <div >
                        <TextArea name='Exercise Details' required={true} width='400px' />
                    </div>
                    <div className='flex items-center text-lg  font-serif'>
                        <p className='m-2'> Equipment <span className='text-red-600 ml-1'>*</span></p>
                        <Box
                            sx={{
                                "& .MuiInputBase-root": { m: 1, width: '200px' },
                                marginLeft: '38px'
                            }}
                        >
                            <FormControl fullWidth>
                                <Select
                                    value={equipment}
                                    onChange={handleChangeEquipment}
                                    size='small'
                                >
                                    <MenuItem value={0}>Dumbbell</MenuItem>
                                    <MenuItem value={1}>Rower</MenuItem>
                                    <MenuItem value={2}>Medicine Ball</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='flex items-center text-lg  font-serif'>
                        <p className='m-2'>Focus Area <span className='text-red-600 ml-1'>*</span></p>
                        <Box
                            sx={{
                                "& .MuiInputBase-root": { m: 1, width: '200px' },
                                marginLeft: '38px'
                            }}
                        >
                            <FormControl fullWidth>
                                <Select
                                    value={focusArea}
                                    onChange={handleChangeFocusArea}
                                    size='small'
                                >
                                    <MenuItem value={0}>Core</MenuItem>
                                    <MenuItem value={1}>Lower</MenuItem>
                                    <MenuItem value={2}>Upper</MenuItem>
                                    <MenuItem value={3}>Total</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='flex items-center text-lg  font-serif'>
                        <p className='m-2'>Assign Group<span className='text-red-600 ml-1'>*</span></p>
                        <Box
                            sx={{
                                "& .MuiInputBase-root": { m: 1, width: '200px' },
                                marginLeft: '23px'
                            }}
                        >
                            <FormControl fullWidth>
                                <Select
                                    value={group}
                                    onChange={handleChangeGroup}
                                    size='small'
                                >
                                    <MenuItem value={0}>Run</MenuItem>
                                    <MenuItem value={1}>Ride</MenuItem>
                                    <MenuItem value={2}>Walk</MenuItem>
                                    <MenuItem value={3}>Hide</MenuItem>
                                    <MenuItem value={4}>Distance</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='flex items-center text-lg  font-serif'>
                        <p className='m-2'>Status<span className='text-red-600 ml-1'>*</span></p>
                        <Box
                            sx={{
                                "& .MuiInputBase-root": { m: 1, width: '200px' },
                                marginLeft: '82px'
                            }}
                        >
                            <FormControl fullWidth>
                                <Select
                                    value={status}
                                    onChange={handleChangeStatus}
                                    size='small'
                                    sx={status === 0 ? { backgroundColor: '#08a848', color: 'white' } : { backgroundColor: 'gray', color: 'white' }}
                                >
                                    <MenuItem value={0}>Active</MenuItem>
                                    <MenuItem value={1}>Deactive</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='flex justify-evenly mt-10'>
                        <ThemeProvider theme={modalTheme}>
                            <Button variant="outlined" color='cancel' sx={styleButton} onClick={() => onClose()} >Cancel</Button>
                            <Button variant="contained" color='save' sx={styleButton}  >Save</Button>
                        </ThemeProvider>
                    </div>
                </Box>
            </Modal>
        </div >
    )
}

export default ExerciseDetails;