import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
} from "@mui/material";

import { projectsData } from "../data";

function StyledGrid({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <Chip label={tag} variant="outlined" key={tag}></Chip>
      ))}
    </div>
  );
}

function Project({ title, description, imageUrl, tags }) {
  return (
    <Grid item>
      <Card sx={{ display: "flex" }}>
        <div>
          <CardContent>
            <Typography variant="h5" paragraph>
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <CardActions sx={{ display: { xs: "block", sm: "none" } }}>
              <StyledGrid tags={tags}></StyledGrid>
            </CardActions>
          </CardContent>
          <CardActions sx={{ display: { xs: "none", sm: "block" } }}>
            <StyledGrid tags={tags}></StyledGrid>
          </CardActions>
        </div>
        <CardMedia image={imageUrl} sx={{ width: 200, display: { xs: "none", sm: "block" } }}></CardMedia>
      </Card>
    </Grid>
  );
}

function Projects() {
  return (
    <Container maxWidth="md" id="projects">
      <Box mt={8} mb={2}>
        <Typography variant="h4">Projects</Typography>
      </Box>
      <Grid container direction="column" spacing={4}  mb={2}>
        {projectsData.map((data) => (
          <Project {...data} key={data.title} />
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;


