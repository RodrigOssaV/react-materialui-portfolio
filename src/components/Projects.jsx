import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Container,
} from "@mui/material";

import ProjectDetail from "./ProjectDetail";

import { projectsData } from "../data";

function Project({ data }) {
  return (
    <Grid item xs={4} p={1}>
      <Card m={1}>
        <CardMedia
          component="img"
          height="280"
          image={process.env.PUBLIC_URL + data.imageUrl}
          alt="green iguana"
        />
        <CardContent sx={{ height: "100%" }}>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.subtitle}
          </Typography>
        </CardContent>        
        <ProjectDetail id={data.id}/>
      </Card>
    </Grid>
  );
}

function Projects() {
  return (
    <Container maxWidth="md" id="projects">
      <Box mt={8} mb={2}>
        <Typography variant="h4">Proyectos</Typography>
      </Box>
      <Box mb={2}>
        <Card>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            {projectsData.map((data) => (
              <Project data={data} key={data.id} />
            ))}
          </Grid>
        </Card>
      </Box>
    </Container>
  );
}

export default Projects;
