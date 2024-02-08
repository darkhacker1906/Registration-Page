import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Fab, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import InfoIcon from "@mui/icons-material/Info";
import PopUpModal from "../components/PopUpModal";
import { NavLink, useNavigate } from "react-router-dom";
export default function FormTable() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [inputData, setInputData] = useState<any>([]);
  const navigate = useNavigate();
  const handleDelete: any = (id: any) => {
    setSelectedId(id);
    setOpen(true);
  };
  const handleEdit = (data: any) => {
    navigate("/", { state: data});
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "forms"), (snapshot) => {
      setInputData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          email: doc.data().email,
          password:doc.data().password,
          confirm_password:doc.data().confirm_password,
          age: doc.data().age,
          gender: doc.data().gender,
          mobileNo: doc.data().mobileNo,
        }))
      );
    });
    return () => unsubscribe();
  }, []);
  console.log(inputData);
  
  return (
    <>
      <TableContainer component={Paper}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: "10px",
            mt: "10px",
          }}
        >
          <NavLink to={"/"}>
            <Fab color="error" aria-label="add" size="small">
              <ClearIcon />
            </Fab>
          </NavLink>
        </Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: "#dedcdc" }}>
              <TableCell>
                <Typography fontWeight={"600"}>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={"600"}>Email</Typography>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inputData.map((data: any) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={data.id}
              >
                <TableCell component="th" scope="row">
                  {data.firstName} {data.lastName}
                </TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    onClick={() => handleDelete(data.id)}
                    sx={{
                      fontSize: "23px",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
                  {"  "}
                  <EditCalendarIcon
                    onClick={() => handleEdit(data)}
                    sx={{
                      fontSize: "23px",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />

                  {"  "}
                  <NavLink to={`/form-table/${data.id}`}>
                    <InfoIcon
                      sx={{
                        fontSize: "23px",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </NavLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PopUpModal open={open} setOpen={setOpen} selectedId={selectedId} />
    </>
  );
}
