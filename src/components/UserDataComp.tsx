import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function UserDataComp({ name, data }) {
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h6">{name}</Typography>
        <Box>
          <Typography variant="h6">{data}</Typography>
        </Box>
      </Stack>
    </div>
  );
}

export default UserDataComp;
