import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const AddBus = () => {
  return (
    <Box sx={{ width: "90%", margin: "auto", pt: 10, pb: 10 }}>
      <Paper sx={{ p: 6 }}>
        <Typography
          component="h1"
          sx={{ textAlign: "center", fontSize: "40px", fontWeight: "800" }}
        >
          Add Bus
        </Typography>

        <Box component="form">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 4,
            }}
          >
            <div>
              <TextField
                id="standard-basic"
                label="Bus Name"
                variant="standard"
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Bus Number"
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
            <div>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="bus seats number"
                variant="standard"
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Routes"
                variant="standard"
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Bus Fare"
                variant="standard"
                fullWidth
              />
            </div>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Bus Type{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Super Deluxe</MenuItem>
                <MenuItem value={20}>A/C </MenuItem>
                <MenuItem value={30}>Non A/C</MenuItem>
              </Select>
            </FormControl>

            <div>
              <label>Driving License</label>
              <TextField
                type="file"
                id="standard-basic"
                variant="standard"
                fullWidth
              />
            </div>
            <div>
              <label>Bus Picture</label>
              <TextField
                type="file"
                id="standard-basic"
                variant="standard"
                fullWidth
              />
            </div>
          </Box>

          <Box sx={{ pt: 3 }}>
            <Typography>Other Services</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="AC and Fan System"
              />
              <FormControlLabel control={<Checkbox />} label="WIFI" />
              <FormControlLabel control={<Checkbox />} label="Music System" />
              <FormControlLabel control={<Checkbox />} label="Mobile Charger" />
              <FormControlLabel control={<Checkbox />} label="Mineral Water" />
              <FormControlLabel
                control={<Checkbox />}
                label="On Time Departure"
              />
            </FormGroup>
          </Box>

          <Box sx={{ pt: 4 }}>
            <Button>Add Bus</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddBus;
