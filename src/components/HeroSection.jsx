import React from "react";
import Typed from "react-typed";
import {
  Paper,
  styled,
  Container,
  Grid,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { aboutHeroSection } from "../data";
import Social from "./Social";

const StyledPaper = styled(Paper)({
  height: "80vh",
  position: "relative",
  backgroundImage:
    "url(https://i.pinimg.com/originals/fd/03/df/fd03dfb716da9794d246a3d5c69081b4.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 1,
});

function About({ title, about }) {
  return (
    <div key={title}>
      <Typography variant="h3">
        <Typed strings={[about]} typeSpeed={40} />
      </Typography>
      <Typography variant="subtitle1" sx={{textTransform: "uppercase"}}>
        <Typed strings={[
          "Desarrollo FrontEnd",
          "Desarrollo BackEnd",
          "Desarrollo Websites",
          "Desarrollo App Escritorio",
          "Desarrollo App Móviles"
          ]} typeSpeed={80} backSpeed={30} loop />
      </Typography>
      <Box my={1}>
        <Button variant="contained" href="mailto:address@email.com">
          Contáctame
        </Button>
      </Box>
    </div>
  );
}

function HeroSection() {
  return (
    <StyledPaper>
      <Container maxWidth="md" sx={{ height: "100%", }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ position: "relative", zIndex: 100, height: "100%" }}
        >
          <Grid item sm={8}>
            {aboutHeroSection.map((data) => (
              <About {...data} key={data.title} />
            ))}
          </Grid>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Social direction="column" />
          </Grid>
        </Grid>
      </Container>
    </StyledPaper>
  );
}

export default HeroSection;
