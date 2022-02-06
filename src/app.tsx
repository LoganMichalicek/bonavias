import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import { About, Contact, Donate, Gallery, Home, Testimonials } from './components/pages/index';

class App extends React.Component {
  pages: Record<string, JSX.Element>;

  constructor(props: null) {
    super(props);

    // In order of list appearance
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
        <Header pages={Object.keys(this.pages)} initialPage={window.location.pathname} />
        <Routes>
          {Object.keys(this.pages).map((page, idx) => {
            const path = page === 'Home' ? '/' : '/' + page.toLowerCase();
            return <Route key={idx} path={path} element={this.pages[page]} />;
          })}
        </Routes>
        <Footer pages={Object.keys(this.pages)} initialPage={window.location.pathname} />
      </Router>
    );
  }
}

reactDOM.render(<App />, document.getElementById('root'));
