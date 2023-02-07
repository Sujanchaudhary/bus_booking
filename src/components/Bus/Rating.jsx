import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Rating, TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function RatingModal() {
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
        Add Rating
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Rate out 5</Typography>

          <Rating />
          <Typography>Message</Typography>
          <TextField
            sx={{
              borderRadius: "5px",
              background: "#f0f0f0",
              width: "100%",
            }}
            variant="outlined"
            required
            multiline
            rows={4}
            fullWidth
            name="message"
          />
        </Box>
      </Modal>
    </div>
  );
}
