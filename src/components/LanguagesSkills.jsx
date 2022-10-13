import React from "react";
import {
  Typography,
  Box,
  Grid,
  Stack,
  CircularProgress,
} from "@mui/material";
import { lenguageSkill } from "../data";


function LanguagesSkills() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      textAlign="center"
      spacing={4}
      mt={0.1}
      mb={1}
    >
      {lenguageSkill.map((data) => (
        <Grid item key={data.title}>
          <Stack direction="row">
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress variant="determinate" value={data.value} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption" component="div">
                  {data.value}%
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            justifyContent="center"
          >
            {data.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default LanguagesSkills;
