import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Cv from "./components/cv/Cv";
import GitRepositories from "./components/git/GitRepositories";
import { Container } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/cv" element={<Cv />} />
            <Route index path="/" element={<GitRepositories />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
