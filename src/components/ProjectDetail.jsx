import React, { useState } from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  Button,
  DialogContent,
  Dialog,
  DialogTitle,
  Chip,
  styled,
  IconButton,
  Typography,
} from "@mui/material";
import { projectsData } from "../data";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function StyledGridTags({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <Chip
          label={tag}
          variant="outlined"
          key={tag}
          sx={{ marginRight: 1, marginTop: 1}}
        ></Chip>
      ))}
    </div>
  );
}

function StyledGridLinks({ links }) {
  return (
    <div>
      {links.map((link) => (
        <IconButton href={link.href} key={link.href}>
          <GitHubIcon />
        </IconButton>
      ))}
    </div>
    
  );
}

function ProjectDetail({ id }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const idDetail = id;
  const filtered = projectsData.filter((task) => task.id === idDetail);

  return (
    <div>
      <Button variant="text" size="small" onClick={handleClickOpen}>
        Ver más
      </Button>

      {filtered.map((project) => (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          key={project.id}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            {project.title}
          </BootstrapDialogTitle>
          <DialogContent>
            <Typography gutterBottom>{project.description}</Typography>
            <StyledGridLinks links={project.links}></StyledGridLinks>
            <StyledGridTags tags={project.tags}></StyledGridTags>
          </DialogContent>
        </BootstrapDialog>
      ))}
    </div>
  );
}

export default ProjectDetail;
