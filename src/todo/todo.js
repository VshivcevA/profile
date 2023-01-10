import Layout from "./components/Layout";
import { Route, Routes} from "react-router-dom";
import React from "react";
import Projects from "./components/projects/Projects";
import Tasks from "./components/tasks/Tasks";

export default function Todo() {
  return (
    <>
      <p>Todo app</p>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/projects" element={<Projects/>} />
            <Route path="/tasks" element={<Tasks/>} />
          </Route>
        </Routes>
    </>

  )
}
