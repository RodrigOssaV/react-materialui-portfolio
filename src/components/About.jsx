import React, { useState } from "react";
import LanguagesSkills from "./LanguagesSkills";
import ProgramingSkill from "./ProgramingSkill";

import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    Stack,
    Avatar,
    Button,
} from "@mui/material";

import { aboutDescription } from "../data";

const AboutRow = ({ aboutDescription }) => {
    const [isOpened, setIsOpened] = useState(false);
    function toggle() {
        setIsOpened((wasOpened) => !wasOpened);
    }
    return (
        <CardContent sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container align="center">
            <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            justifyContent="center"          
            >
            <Grid item xs={8} textAlign="center">
                {aboutDescription.map((data) => (
                <Typography key={data.title} paragraph>
                    {data.description}
                </Typography>
                ))}
                <LanguagesSkills />
            </Grid>
            <Grid item xs={4}>
                <Avatar
                sx={{ width: 220, height: 220 }}
                src="https://avatars.githubusercontent.com/u/49349061?v=4"
                ></Avatar>
            </Grid>
            </Stack>
            
            <Grid item>
            <Button variant="contained" onClick={toggle} size="small">
            Librerías y Frameworks
            </Button>
            </Grid>
            {isOpened && <ProgramingSkill />}
        </Grid>
        </CardContent>
    );
};

const AboutColumn = ({ aboutDescription }) => {
    const [isOpened, setIsOpened] = useState(false);
    function toggle() {
        setIsOpened((wasOpened) => !wasOpened);
    }
    return (
        <CardContent
        sx={{
            display: { xs: "block", md: "none" },
        }}
        >
        <Grid container align="center">
            <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            >
            <Grid item mb={2}>
                <Avatar
                sx={{ width: 220, height: 220 }}
                src="https://avatars.githubusercontent.com/u/49349061?v=4"
                ></Avatar>
            </Grid>
            <Grid item>
                {aboutDescription.map((data) => (
                <Typography key={data.title}>{data.description}</Typography>
                ))}
            </Grid>
            <Grid item>
                <LanguagesSkills />
            </Grid>
            </Stack>
            <Button variant="contained" onClick={toggle} size="small">
            Librerías y Frameworks
            </Button>
            {isOpened && <ProgramingSkill />}
        </Grid>
        </CardContent>
    );
};

function About() {
    return (
        <Container maxWidth="md" id="about">
        <Box mt={6} mb={1}>
            <Typography variant="h4">About</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
            <Card>
            <AboutRow aboutDescription={aboutDescription} />
            <AboutColumn aboutDescription={aboutDescription} />
            </Card>
        </Box>
        </Container>
    );
}

export default About;
