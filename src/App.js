import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/Layout/ScrollToTop";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Cv from './components/cv/Cv';
import GitRepositories from './components/git/GitRepositories'
import {Container} from "@mui/material";
//import Todo from "./components/todo/todo";
//import Search from "./components/search";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container className="container">
        {/*<BrowserRouter>*/}
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path="/cv" element={<Cv />} />
              <Route index path="/" element={<GitRepositories />} />
            </Route>
          </Routes>
        {/*</BrowserRouter>*/}
      </Container>
    </ThemeProvider>
  );
}

export default App;
