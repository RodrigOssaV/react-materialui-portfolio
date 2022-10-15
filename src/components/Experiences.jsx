import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import { experienceData } from "../data";

function Experience({ title, description, year_started, year_end }) {
  return (
    <Card sx={{ display: "flex" }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="textSecondary" fontSize="14" mb={1}>
          {year_started} - {year_end}
        </Typography>
        <Box>
          <Typography variant="body1" color="textPrimary">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

function Experiences() {
  return (
    <Container maxWidth="md" id="experience">
      <Box mt={8} mb={2}>
        <Typography variant="h4">Experiencia</Typography>
      </Box>
      <Box mb={2}>
        {experienceData.map((data) => (
          <Experience {...data} key={data.title} />
        ))}
      </Box>
    </Container>
  );
}

export default Experiences;


