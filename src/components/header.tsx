import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

interface IHeaderProps {
  pages: Record<string, JSX.Element>;
}

export default function Header(props: IHeaderProps) {
  return (
    <Router>
      <h1>The Bona Vias Foundation</h1>
      <nav>
        {Object.keys(props.pages).map((page, idx) => {
          const path = page === 'Home' ? '/' : '/' + page.toLowerCase();
          return (
            <Link key={idx} to={path}>
              <button type="button">{page}</button>
            </Link>
          );
        })}
      </nav>
      <Routes>
        {Object.keys(props.pages).map((page, idx) => {
          const path = page === 'Home' ? '/' : '/' + page.toLowerCase();
          return <Route key={idx} path={path} element={props.pages[page]} />;
        })}
      </Routes>
    </Router>
  );
}
