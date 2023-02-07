import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BusList from "./BusList";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AllBuses() {
  return (
    <Box sx={{ flexGrow: 1, width: "90%", margin: "auto", pt: 10 }}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Item>
            <Typography sx={{ fontWeight: "800", fontSize: "30px" }}>
              Category of Bus
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="A/C"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Non A/C"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Deluxe"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Super Deluxe"
              />
            </FormGroup>
          </Item>
        </Grid>
        <Grid item md={9} xs={12}>
          <BusList />
        </Grid>
      </Grid>
    </Box>
  );
}
