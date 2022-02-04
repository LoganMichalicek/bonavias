import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props: { pages: string[] }) {
  return (
    <>
      <h1>The Bona Vias Foundation</h1>
      <nav>
        {props.pages.map((page, idx) => {
          return (
            <Link key={idx} to={page === 'Home' ? '/' : '/' + page.toLowerCase()}>
              <button type="button">{page}</button>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
