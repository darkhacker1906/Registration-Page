import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PopUpModal({ open, setOpen, selectedId }) {
  const handleClose = () => setOpen(false);
  const handlePopDelete = async (selectedId: any) => {
    try {
      await deleteDoc(doc(db, "forms", selectedId));
      setOpen(false);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            color={"red"}
          >
            Alert
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Do you really want to delete the data
          </Typography>
          <Button
            variant="contained"
            sx={{ margin: "10px" }}
            onClick={() => handlePopDelete(selectedId)}
          >
            Delete
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
