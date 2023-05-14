import { Link, Outlet } from "react-router-dom";
import React from "react";
import styled from "styled-components";
const NavBar = styled.nav`
  display: flex;
  min-height: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
`;
const NavLink = styled(Link)`
  padding: 20px 30px;
  height: 100%;
  box-sizing: border-box;
  transition: all 0.2s linear;
  text-decoration: none;
  :hover {
    background-color: #444954;
  }
`;
export default function Layout() {
  return (
    <>
      <header>
        <NavBar>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/">Portfolio</NavLink>
        </NavBar>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Aleksandr Vshivrsev</p>
      </footer>
    </>
  );
}
