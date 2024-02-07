import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import InfoIcon from "@mui/icons-material/Info";
import PopUpModal from "../components/PopUpModal";
export default function FormTable() {
  const [open, setOpen] = useState(false);
  const [inputData, setInputData] = useState<any>([]);
    const handleDelete:any = async (id : any) => {
        setOpen(true);
        await deleteDoc(doc(db, "todos", id));
      };
      
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "forms"), (snapshot) => {
      setInputData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          email: doc.data().email,
          age: doc.data().age,
          gender: doc.data().gender,
          mobileNo: doc.data().mobileNo,
        }))
      );
    });
    return () => unsubscribe();
  }, []);
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
        <Fab color="error" aria-label="add" size="small">
          <ClearIcon />
        </Fab>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
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
                <DeleteIcon onClick={()=>handleDelete(data.id)} sx={{ fontSize: "23px" }} />
                {"  "}
                <EditCalendarIcon sx={{ fontSize: "23px" }} />
                {"  "}
                <InfoIcon sx={{ fontSize: "23px" }}  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <PopUpModal open={open} setOpen={setOpen}/>
    </>
  );
}
