import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props: { pages: string[]; initialPage?: string }) {
  const [currentPage, setCurrentPage] = useState(props.initialPage || '/');

  return (
    <>
      <h1>The Bona Vias Foundation</h1>
      <nav>
        {props.pages.map((page, idx) => {
          const path = page === 'Home' ? '/' : '/' + page.toLowerCase();
          return (
            <Link key={idx} to={path}>
              <button type="button" onClick={() => setCurrentPage(path)} disabled={path === currentPage}>
                {page}
              </button>
            </Link>
          );
        })}
      </nav>
      <hr />
    </>
  );
}
