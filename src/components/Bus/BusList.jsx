import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const BusList = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            xs: "repeat(1, 1fr)",
          },
          gap: 3,
        pb:6
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title="Itahari - Kathmandu"
            subheader="Saptakoshi Yatayat"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://thumbs.dreamstime.com/b/snowy-winter-day-view-kadikoy-public-bus-station-large-populous-cosmopolitan-district-asian-side-istanbul-136118971.jpg"
            alt="Paella dish"
          />
          <CardContent sx={{ display: "flex" }}>
            <Rating name="size-small" defaultValue={2} size="small" />
            <Typography sx={{ ml: 1 }} variant="caption">
              2/10
            </Typography>
            <Typography sx={{ ml: 5 }} variant="caption">
              Na. 3 Kha: 3030
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ dispaly: "flex", justifyContent: "space-around" }}
          >
            <Button variant="contained" size="small">
              See more
            </Button>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title="Itahari - Kathmandu"
            subheader="Saptakoshi Yatayat"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://thumbs.dreamstime.com/b/snowy-winter-day-view-kadikoy-public-bus-station-large-populous-cosmopolitan-district-asian-side-istanbul-136118971.jpg"
            alt="Paella dish"
          />
          <CardContent sx={{ display: "flex" }}>
            <Rating name="size-small" defaultValue={2} size="small" />
            <Typography sx={{ ml: 1 }} variant="caption">
              2/10
            </Typography>
            <Typography sx={{ ml: 5 }} variant="caption">
              Na. 3 Kha: 3030
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ dispaly: "flex", justifyContent: "space-around" }}
          >
            <Button variant="contained" size="small">
              See more
            </Button>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title="Itahari - Kathmandu"
            subheader="Saptakoshi Yatayat"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://thumbs.dreamstime.com/b/snowy-winter-day-view-kadikoy-public-bus-station-large-populous-cosmopolitan-district-asian-side-istanbul-136118971.jpg"
            alt="Paella dish"
          />
          <CardContent sx={{ display: "flex" }}>
            <Rating name="size-small" defaultValue={2} size="small" />
            <Typography sx={{ ml: 1 }} variant="caption">
              2/10
            </Typography>
            <Typography sx={{ ml: 5 }} variant="caption">
              Na. 3 Kha: 3030
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ dispaly: "flex", justifyContent: "space-around" }}
          >
            <Button variant="contained" size="small">
              See more
            </Button>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default BusList;
