import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props: { pages: string[]; initialPage?: string }) {
  return (
    <>
      <div className='header'>
        <h1 className="header-home-title">The Bona Vias Foundation</h1>
        <nav className="header-nav-bar">
          {props.pages.map((page, idx) => {
            const path = page === 'Home' ? '/' : '/' + page.toLowerCase();
            return (
              <Link key={idx} to={path}>
                <button type="button">{page}</button>
              </Link>
            );
          })}
        </nav>
      </div>
      {/* <hr /> */}
    </>
  );
}

// const [currentPage, setCurrentPage] = useState(props.initialPage || '/');
// onClick={() => setCurrentPage(path)}
// disabled={path === currentPage}
