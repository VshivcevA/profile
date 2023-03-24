import {Link, Outlet} from "react-router-dom";
import React from "react";

export default function Layout () {
  return (
    <>
      <header>
        <nav style={{ padding: 10 }}>
          <Link to='/cv' style={{ padding: 20 }}>CV</Link>
          <Link to='/' style={{ padding: 20 }}>Portfolio</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Разработано Вшивцев А.</p>
      </footer>
    </>
  )
}
