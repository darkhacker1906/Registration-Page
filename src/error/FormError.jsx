import React from "react";

function FormError({setErr}) {
  return (
    <div>
      <p className="form-error" style={{ marginLeft:"16px",color: "red", marginLeft: "16px",marginTop:"0px",marginBottom:"0px",fontStyle:"italic",fontSize:"13px" }}>
        {setErr}
      </p>
    </div>
  );
}

export default FormError;
