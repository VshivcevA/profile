import {Link, Outlet} from "react-router-dom";
import React from "react";

export default function Layout () {
  return (
    <>
      <header>
        <nav style={{ padding: 10 }}>
          <Link to='/cv' style={{ padding: 20 }}>cv</Link>
          {/*<Link to='/git' style={{ padding: 20 }}>git</Link>*/}
          <Link to='/todo' style={{ padding: 20 }}>todo</Link>
          {/*<Link to='/sedona' style={{ padding: 20 }}>sedona</Link>*/}
          <Link to='/search' style={{ padding: 20 }}>search</Link>
          {/*<a href="./sedona/build/index.html">test</a>*/}
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
