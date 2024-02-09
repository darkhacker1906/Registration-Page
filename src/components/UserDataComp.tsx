import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function UserDataComp({ name, data }) {
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography gutterBottom variant="h6" fontWeight={"bold"} component="div">{name}</Typography>
        <Typography gutterBottom variant="h6">{data}</Typography>
      </Stack>
    </div>
  );
}

export default UserDataComp;
