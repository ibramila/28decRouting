import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import { axiosInstance } from "../../api/axiosInstance";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ getData }) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    name: "",
    unitPrice: "",
    unitsInStock: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const notify = () => {
    toast.success("Supplier added to API successfully!", {
      duration: 1800,
      position: "bottom-right",
      icon: "?",
      theme: {
        primary: "green",
        secondary: "black",
      },
    });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axiosInstance.post("products", {
      name: state.name ,
      unitPrice: state.unitPrice,
      unitsInStock: state.unitsInStock,
    });

    notify();
    handleClose();
    getData();
  };
  return (
    <div>
      <Toaster />
      <button onClick={handleOpen}>Add</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate autoComplete="off">
          <FormControl>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Product Name"
                multiline
                maxRows={4}
                style={{ margin: "10px" }}
                name="name"
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Unit Price"
                multiline
                maxRows={4}
                style={{ margin: "10px" }}
                name="unitPrice"
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Contact Title"
                multiline
                maxRows={4}
                style={{ margin: "10px" }}
                name="unitsInStock"
                onChange={handleChange}
              />
              <Button onClick={handleSubmit}>Add</Button>
            </div>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
