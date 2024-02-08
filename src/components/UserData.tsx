import { Box, Button, Card, CardActions, CardContent, CardMedia, Fab, Stack, Typography } from "@mui/material";
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
    <Stack  sx={{background:"#e0e0e0"}}>
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
        sx={{ alignItems: "center", justifyContent: "center"}}
      >
        <Stack
          width={"60%"}
          sx={{ padding: "15px", borderRadius: "10px" }}
        >
          <Card sx={{ maxWidth: "70%" }}>
      <CardContent>
        <Stack spacing={2}>
        <Typography variant="h5">User Details</Typography>
            <Stack direction={"row"} gap={20}>
            <Typography variant="h6">Username</Typography>
            <Typography variant="h6" >
              {filteredData.firstName} {filteredData.lastName}
            </Typography>

            </Stack>
                      
         <Box> <UserDataComp name="Email" data={filteredData.email} />
          <UserDataComp name="Age" data={filteredData.age} />
          <UserDataComp name="Gender" data={filteredData.gender} />
          <UserDataComp name="MobileNo" data={filteredData.mobileNo} />
          </Box>
          </Stack >
      </CardContent>
    </Card>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default UserData;
