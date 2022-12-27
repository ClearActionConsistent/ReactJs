import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const styleButton = {
  width: "100px",
  height: "40px",
  fontWeight: "bold",
  boxShadow: 2,
  borderRadius: "20px",
};

export const modalTheme = createTheme({
  palette: {
    save: {
      main: "#e67e22",
      contrastText: "#fff",
    },
    cancel: {
      main: "#303030",
      contrastText: "#303030",
    },
    success: {
      main: "#3bb143",
      contrastText: "#fff",
    },
    deactive: {
      main: "#6b7280",
      contrastText: "#fff",
    },
  },
});

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const styleModel = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const titleModel = {
  border: "2px solid #999999",
  backgroundColor: "#F4F4F4",
};
