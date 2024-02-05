import { Box } from "@mui/material";
import React from "react";
interface FormErrorProps{
  setErr:string;
}

const FormError:React.FC<FormErrorProps>=({setErr})=>{
    return (
    <>
      <Box className="form-error" sx={{color:"	#FF0000",ml:"16px",fontStyle:"italic",fontSize:"13px"}}>
        {setErr}
      </Box>
    </>
  );
}
export default FormError;
