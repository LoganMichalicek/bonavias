import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import About from './components/pages/about';
import Contact from './components/pages/contact';
import Donate from './components/pages/donate';
import Gallery from './components/pages/gallery';
import Home from './components/pages/home';
import Testimonials from './components/pages/testimonials';

class App extends React.Component {
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
        <Header pages={Object.keys(this.pages)} />
        <Routes>
          {Object.keys(this.pages).map((page, idx) => {
            const path = page === 'Home' ? '/' : '/' + page.toLowerCase();
            return <Route key={idx} path={path} element={this.pages[page]} />;
          })}
        </Routes>
        <Footer />
      </Router>
    );
  }
}

reactDOM.render(<App />, document.getElementById('root'));
