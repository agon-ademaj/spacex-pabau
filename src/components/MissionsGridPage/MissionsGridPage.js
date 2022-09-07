import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";

const MissionsGridPage = ({ missions }) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {missions.map((mission) => (
        <Grid item xs={2} sm={4} md={4}>
          <h2>{mission.mission_name}</h2>
          {mission.launch_success ? (
            <p style={{ color: "green" }}>Success</p>
          ) : (
            <p style={{ color: "red" }}>Failed</p>
          )}
          <img src={mission.links.flickr_images} width={200} height={200} />
          <br></br>
          <Button variant='contained'>
            <Link
              to={`rocket/${mission.rocket.rocket.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              Launch details
            </Link>
          </Button>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default MissionsGridPage;
