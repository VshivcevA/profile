import {Link, Outlet} from "react-router-dom";
import React from "react";

export default function Layout () {
  return (
    <>
      <header>
        <nav>
          <Link to='/todo/projects/' style={{ padding: 20 }}>Проекты</Link>
          <Link to='/todo/tasks/' style={{ padding: 20 }}>Задачи</Link>
        </nav>
      </header>
      <main>
        {/*<p>outlet area</p>*/}
        <Outlet />
      </main>
      <footer>
        {/*<p>UptraderTestTask</p>*/}
      </footer>
    </>
  )
}
