import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setPopup, showChallenge } from '../../../slices/popupSlice';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: "10px"
};

const styleItem = {
    display: "flex",
    justifyContent: " space-between",
    gap: "2rem",
};

const styleBtnArea = {
    display: "flex",
    justifyContent: " flex-end",
    gap: "2rem",
};

const detail = {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    width: "200px",
    maxHeight: "250px",
    overflowY: "auto"
}

const styleDetail = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "1rem",
    fontSize: "14px",
    paddingRight: "2.5px",
    width: "100%"
}

export default function ShowDetail() {
    const [btn, setBtn] = useState({
        color: "primary",
        content: "Start"
    })

    const popup = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setPopup({
            isOpen: !popup.isOpen,
            data: {
                name: '',
                coach_name: '',
                date: '',
                time: '',
                duration: '',
                listDetail: []
            }
        }))
    }

    const challengePromise = new Promise((resolve, reject) => {
        resolve();
        reject();
    })

    const handleAddChallenge = () => {
        challengePromise
            .then(() => {
                setTimeout(() => {
                    setBtn({
                        ...btn, color: "error",
                        content: "End"
                    })
                }, 500)
            })
    }

    const handleOpenAddChallenge = () => {
        dispatch(showChallenge({
            isOpen: false,
            isAddChallenge: !popup.isAddChallenge
        }))
    }


    useEffect(() => {
    }, [popup])

    return (
        <div>
            <Modal
                open={popup.isOpen}
                onClose={() => handleClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={styleItem}>
                        <Typography sx={{ fontWeight: "bold", fontSize: 20 }} id="modal-modal-title" variant="h6" component="h2">
                            {popup?.detail.name || ""}
                        </Typography>
                    </Box>

                    <Box sx={styleItem}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Coach Name
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {popup?.detail.coach_name || ""}
                        </Typography>
                    </Box>
                    <Box sx={styleItem}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Date of  Class
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {popup?.detail.date || ""}
                        </Typography>
                    </Box>
                    <Box sx={styleItem}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Time of  Class
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {popup?.detail.time || ""}
                        </Typography>
                    </Box>
                    <Box sx={styleItem}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duration Of Class
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {popup?.detail.duration || ""}
                        </Typography>
                    </Box>
                    <Box sx={styleItem}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Details
                        </Typography>
                        <Box sx={detail}>
                            {
                                popup?.detail.listDetail.length > 0 && popup?.detail.listDetail.map((item) => {
                                    return <Typography key={uuidv4()} id="modal-modal-description" sx={styleDetail} >
                                        - {item}
                                    </Typography>
                                })
                            }
                        </Box>
                    </Box>
                    <Box sx={styleBtnArea}>
                        <Button onClick={() => btn.content == "Start" ? handleAddChallenge() : handleOpenAddChallenge()} sx={{ mt: 2 }} variant="contained" color={btn.color}>{btn.content || null}</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}