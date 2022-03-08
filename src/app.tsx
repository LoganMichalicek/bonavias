import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import { About, Contact, Donate, Gallery, Home, Testimonials, Privacy, Terms } from './components/pages/index';

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
      <div id="app"
        style={{
          backgroundImage: `url("${require('./assets/home-shaded-dark.jpg')}")`,
          // backgroundPosition: 'top center',
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'contain'
        }}
      >
        <Router>
          <Header pages={Object.keys(this.pages)} initialPage={window.location.pathname} />
          <Routes>
            {Object.keys(this.pages).map((page, idx) => {
              const path = page === 'Home' ? '/' : '/' + page.toLowerCase();
              return <Route key={idx} path={path} element={this.pages[page]}/>;
            })}
            <Route key={11} path={'privacy'} element={<Privacy />} />
            <Route key={11} path={'terms'} element={<Terms />} />
          </Routes>
          <Footer pages={Object.keys(this.pages)} initialPage={window.location.pathname} />
        </Router>
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('root'));
