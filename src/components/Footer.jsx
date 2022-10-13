import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, IconButton, Link, AppBar, Typography } from "@mui/material";

const socialItems = [
  { icon: GitHubIcon, url: "https://github.com/RodrigOssaV", name: "github" },
  /* { icon: TwitterIcon, url: "", name: "twitter" }, */
  {
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/rodrigo-ossa-villalobos-a06085202/",
    name: "linkedin",
  },
];

function Footer() {
  return (
    <AppBar position="relative">
      <Grid
        container
        direction={"row"}
        spacing={1}
        justifyContent="center"
        sx={{ display: { md: "none" }}}
      >
        {socialItems.map((item) => (
          <Grid item key={item.name}>
            <Link href={item.url}>
              <IconButton>
                <item.icon />
              </IconButton>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="subtitle2"
        justifyContent="center"
        textAlign="center"
      >
        © Rodrigo Ossa Villalobos
      </Typography>
    </AppBar>
  );
}

export default Footer;
