import React, { useEffect } from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import { About, Contact, Donate, Gallery, Home, Testimonials, Privacy, Terms } from './components/pages/index';

class App extends React.Component {
  pages: Record<string, JSX.Element>;
  currentPage: string;

  constructor(props: null) {
    super(props);

    // In order of list appearance
    this.pages = {
      Home: <Home />,
      About: <About />,
      Contact: <Contact />,
      Donate: <Donate />,
      Gallery: <Gallery />,
      Testimonials: <Testimonials />,
      Privacy: <Privacy />,
      Terms: <Terms />
    };

    this.currentPage = window.location.pathname;
    this.setPage = this.setPage.bind(this);
  }

  setPage(newPage: string) {
    this.currentPage = newPage;
    console.log(this.currentPage);
  }

  render() {
    console.log(this.currentPage);
    return (
      <div id="app"
      style={{
        backgroundImage: `url("${require('./assets/home-shaded-dark.jpg')}")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%'
      }}
      >
        <Router>
          <Header pages={Object.keys(this.pages)} initialPage={window.location.pathname} />
          <Routes>
            {Object.keys(this.pages).map((page, idx) => {
              const path = page === 'Home' ? '/' : '/' + page.toLowerCase();
              return <Route key={idx} path={path} element={this.pages[page]}/>;
            })}
          </Routes>
          <Footer pages={Object.keys(this.pages)} initialPage={window.location.pathname} />
        </Router>
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('root'));
