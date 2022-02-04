import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import About from './pages/about';
import Contact from './pages/contact';
import Donate from './pages/donate';
import Gallery from './pages/gallery';
import Home from './pages/home';
import Testimonials from './pages/testimonials';

export default class Header extends React.Component {
  pages: Record<string, JSX.Element>;

  constructor(props: null) {
    super(props);
    this.pages = {
      Home: <Home />,
      About: <About />,
      Contact: <Contact />,
      Donate: <Donate />,
      Gallery: <Gallery />,
      Testimonials: <Testimonials />
    };
  }

  render() {
    return (
      <Router>
        <h1>The Bona Vias Foundation</h1>
        <nav>
          {Object.keys(this.pages).map((page, idx) => {
            const path = page === 'Home' ? '/' : '/' + page.toLowerCase();
            return (
              <Link key={idx} to={path}>
                <button type="button">{page}</button>
              </Link>
            );
          })}
        </nav>
        <Routes>
          {Object.keys(this.pages).map((page, idx) => {
            const path = page === 'Home' ? '/' : '/' + page.toLowerCase();
            return <Route key={idx} path={path} element={this.pages[page]} />;
          })}
        </Routes>
      </Router>
    );
  }
}
