import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/Layout/ScrollToTop";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Cv from './components/cv/Cv';
// import GitRepositories from './components/git/GitRepositories'
import {Container} from "@mui/material";
import Todo from "./todo/todo";
import Sedona from "./sedona/Sedona";
import Search from "./search";


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
              {/*<Route path="/git" element={<GitRepositories />} />*/}
              <Route path="/todo/*" element={<Todo />} />
              {/*<Route path="/sedona/" element={<Sedona/>} />*/}
              <Route path="/search/*" element={<Search/>} />
            </Route>
          </Routes>
        {/*</BrowserRouter>*/}
      </Container>
    </ThemeProvider>
  );
}

export default App;
