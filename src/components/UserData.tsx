import { Box, Fab, Stack, Typography } from "@mui/material";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { db } from "../firebase";
import ClearIcon from "@mui/icons-material/Clear";
import UserDataComp from "./UserDataComp";

function UserData() {
  const userId = useParams();
  const id = userId.id;
  const [inputdata, setInputdata] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>({});
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "forms"), (snapshot) => {
      setInputdata(
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

  useEffect(() => {
    if (id && inputdata.length > 0) {
      const data = inputdata.find((item: any) => item.id === id);
      setFilteredData(data);
    }
  }, [id, inputdata]);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <NavLink to={"/form-table"}>
          <Fab color="error" aria-label="add" size="small">
            <ClearIcon />
          </Fab>
        </NavLink>
      </Box>
      <Stack
        height={"100vh"}
        display={"flex"}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Stack
          width={"60%"}
          sx={{ background: "#c4e6f5", padding: "15px", borderRadius: "10px" }}
        >
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Details
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            {" "}
            <Typography variant="h6">Username</Typography>
            <Typography variant="h6">
              {filteredData.firstName} {filteredData.lastName}
            </Typography>
          </Box>
          <UserDataComp name="Email" data={filteredData.email} />
          <UserDataComp name="Age" data={filteredData.age} />
          <UserDataComp name="Gender" data={filteredData.gender} />
          <UserDataComp name="MobileNo" data={filteredData.mobileNo} />
        </Stack>
      </Stack>
    </>
  );
}

export default UserData;
