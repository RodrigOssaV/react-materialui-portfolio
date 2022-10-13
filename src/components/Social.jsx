import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, IconButton, Link } from "@mui/material";

const socialItems = [
    { icon: GitHubIcon, url: "https://github.com/RodrigOssaV", name: "github" },
    /* { icon: TwitterIcon, url: "", name: "twitter" }, */
    {
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/rodrigo-ossa-villalobos-a06085202/",
      name: "linkedin",
    },
  ];

function Social({direction}) {
  return (
    <Grid container direction={direction} spacing={1}>
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
  );
}

export default Social;
