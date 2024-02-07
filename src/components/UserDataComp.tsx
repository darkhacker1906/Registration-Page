import { Box, Typography } from '@mui/material'
import React from 'react'

function UserDataComp({name,data}) {
  return (
    <div>
     <Box display={"flex"} mt={"10px"} justifyContent={"space-between"}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="h6">{data}</Typography>
        </Box>
    </div>
  )
}

export default UserDataComp
