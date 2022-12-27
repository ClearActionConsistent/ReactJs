import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  modalStyle,
  modalTheme,
  styleButton,
} from "../../pages/AdminSite/ExerciseManagement/style";

const ConfirmModal = ({ isShow, onClose, isDeactive }) => {
  const [open, setOpen] = useState(isShow);

  useEffect(() => {
    setOpen(isShow);
  }, [isShow]);

  return (
    <div>
      <Modal open={open}>
        <Box sx={modalStyle}>
          <div className="flex justify-center">
            <Typography align="center" variant="h5" component="h2">
              {isDeactive
                ? "Are you sure to deactive this user ?"
                : "Are you want to reset password this user ?"}
            </Typography>
          </div>
          <div className="mt-10">
            <div className="flex justify-evenly mt-10">
              <ThemeProvider theme={modalTheme}>
                <Button
                  variant="outlined"
                  color="cancel"
                  sx={styleButton}
                  onClick={() => onClose()}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="save"
                  sx={styleButton}
                  onClick={() => onClose()}
                >
                  Yes
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
