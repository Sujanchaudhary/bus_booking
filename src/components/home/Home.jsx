import { Button, TextField } from "@mui/material";
import SliderCarousel from "./Slider";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FeaturedBus from "./FeaturedBus";
import TopDestination from "./TopDestination";
import FacebookChat from "./FacebookChat";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, pt: 10, mx: 5 }}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <SliderCarousel />
        </Grid>
        <Grid item md={4} xs={12}>
          <Item>
            <div>
              <TextField
                id="outlined-error"
                label="Leaving From"
                margin="normal"
                fullWidth
              />
              <TextField
                id="outlined-error"
                label="Destination to"
                margin="normal"
                fullWidth
              />
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  placeholder="select Shift"
                  //   value={age}
                  //   label="Age"
                  //   onChange={handleChange}
                >
                  <MenuItem value={30}>Both</MenuItem>
                  <MenuItem value={10}>Day</MenuItem>
                  <MenuItem value={20}>Night</MenuItem>
                </Select>
              </FormControl>
              <TextField fullWidth type="datetime-local" margin="normal" />
              <Button variant="contained">Search</Button>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <FeaturedBus />
        </Grid>
        <Grid item xs={12}>
          <TopDestination />
        </Grid>
        <div>
          <FacebookChat />
        </div>
      </Grid>
    </Box>
  );
};

export default Home;
