import { Box, Button } from "@mui/material";
import React from "react";

function ButtonDash() {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button variant="contained">Dashboard</Button>
    </Box>
  );
}

export default ButtonDash;
