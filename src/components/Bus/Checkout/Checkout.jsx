import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Checkout() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          background: "#212121",
          color: "white",
          "&:hover": {
            color: "black",
            backgroundColor: "lightblue",
          },
        }}
      >
        Book Seats
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <tbody>
              <tr>
                <td style={{ textAlign: "left", padding: "15px" }}>Seat(s)</td>
                <td>:</td>
                <td>3</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", padding: "15px" }}>
                  Seat(s) Number
                </td>
                <td>:</td>
                <td>A3, B1, B2</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", padding: "15px" }}>
                  Bus Fare per
                </td>
                <td>:</td>
                <td>Rs: 1000</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", padding: "15px" }}>
                  Total Amount(s)
                </td>
                <td>:</td>
                <td>Rs: 3000</td>
              </tr>
            </tbody>
          </table>
          <Box component="form">
            <div>
              <TextField
                id="standard-basic"
                label="Boarding Place"
                variant="standard"
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                fullWidth
              />
            </div>
            <FormControl fullWidth variant="standard" sx={{ pb: 2 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select Payment Method
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // onChange={handleChange}
                label="Select Payment Method"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="cod">Cash On Delivery(COD)</MenuItem>
                <MenuItem value="Khalti">Khalti</MenuItem>
              </Select>
            </FormControl>

            <Button
              sx={{
                background: "#212121",
                color: "white",
                "&:hover": {
                  color: "black",
                  backgroundColor: "lightblue",
                },
              }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
