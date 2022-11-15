import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPopup } from '../../../slices/popupSlice';
import { v4 as uuidv4 } from 'uuid';

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
    const popup = useSelector((state) => state.popup);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setPopup({
            isOpen: !popup.isOpen,
            data: {
                name: 'Unknown',
                coach_name: 'Unknown',
                date: 'Unknown',
                time: 'Unknown',
                duration: 'Unknown',
                listDetail: []
            }
        }))
    }

    useEffect(() => {
        console.log("redux", popup?.detail.listDetail)
    }, [popup])

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={popup.isOpen}
                onClose={() => handleClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={styleItem}>
                        <Typography sx={{ fontWeight: "bold", fontSize: 30 }} id="modal-modal-title" variant="h6" component="h2">
                            {popup?.detail.name || "Unknown"}
                        </Typography>
                    </Box>

                    <Box sx={styleItem}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Coach Name
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {popup?.detail.coach_name || "Unknown"}
                        </Typography>
                    </Box>
                    <Box sx={styleItem}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Date of  Class
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {popup?.detail.date || "Unknown"}
                        </Typography>
                    </Box>
                    <Box sx={styleItem}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Time of  Class
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {popup?.detail.time || "Unknown"}
                        </Typography>
                    </Box>
                    <Box sx={styleItem}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duration Of Class
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {popup?.detail.duration || "Unknown"}
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

                </Box>
            </Modal>
        </div>
    );
}