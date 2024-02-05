import React from "react";
interface FormErrorProps{
  setErr:string;
}

const FormError:React.FC<FormErrorProps>=({setErr})=>{
    return (
    <div>
      <div className="form-error" style={{color: "red", marginLeft: "16px",marginTop:"0px",marginBottom:"0px",fontStyle:"italic",fontSize:"13px" }}>
        {setErr}
      </div>
    </div>
  );
}
export default FormError;
