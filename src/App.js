import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";
import { useState } from "react";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experiences from "./components/Experiences";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("dark");
  let darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  darkTheme = responsiveFontSizes(darkTheme);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar setMode={setMode} mode={mode} />
      <HeroSection />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
