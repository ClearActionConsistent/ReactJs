import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { modalTheme, StyledTableCell, StyledTableRow } from "./style";
import ExerciseDetail from "./exerciseDetail";
import ConfirmModal from "../../../components/Modal/ConfirmModal";

const ExerciseTR = () => {
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [deactiveUser, setDeactiveUser] = useState(false);
  const showEditModal = (status, item) => {
    setShowModal(status);
    setData(item);
  };

  const createData = (
    groupNumber,
    groupName,
    community,
    address,
    city,
    quotation,
    phone,
    quantity,
    action
  ) => {
    return {
      groupNumber,
      groupName,
      community,
      address,
      city,
      quotation,
      phone,
      quantity,
      action,
    };
  };

  const exerciseDatas = [
    createData(1, "Run 60Mins", "Run", "", "", "", "", "", "", true),
    createData(2, "Ride 20Mins", "Ride", "", "", "", "", "", "", false),
  ];

  return (
    <div className="mt-5" component={Paper}>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>GroupNumber</StyledTableCell>
              <StyledTableCell align="left">GroupName</StyledTableCell>
              <StyledTableCell align="center">Community</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exerciseDatas.map((data, index) => (
              <StyledTableRow>
                <StyledTableCell
                  key={data.groupNumber}
                  onClick={() => showEditModal(true, data)}
                  component="th"
                  scope="row"
                >
                  {data.groupNumber}
                </StyledTableCell>
                <StyledTableCell
                  key={data.groupNumber}
                  onClick={() => showEditModal(true, data)}
                  align="left"
                >
                  {data.groupName}
                </StyledTableCell>
                <StyledTableCell
                  key={data.groupNumber}
                  onClick={() => showEditModal(true, data)}
                  align="center"
                >
                  {data.community}
                </StyledTableCell>
                <StyledTableCell
                  key={data.groupNumber}
                  onClick={() => showEditModal(true, data)}
                  align="center"
                >
                  {data.quantity}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <ThemeProvider theme={modalTheme}>
                    <button
                      onClick={() => showEditModal(true, data)}
                      className="bg-white border border-gray-700 p-2 rounded-lg"
                    >
                      <EditIcon />
                    </button>
                    <Button
                      onClick={() => setDeactiveUser(true)}
                      variant="contained"
                      color="deactive"
                      sx={{ marginLeft: "30px" }}
                    >
                      Deactive
                    </Button>
                  </ThemeProvider>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal && (
        <ExerciseDetail
          isShow={showModal}
          onClose={() => setShowModal(false)}
          exerciseDatas={data}
        />
      )}
      {deactiveUser && (
        <ConfirmModal
          isShow={deactiveUser}
          onClose={() => setDeactiveUser(false)}
          isDeactive={true}
        />
      )}
    </div>
  );
};

export default ExerciseTR;
