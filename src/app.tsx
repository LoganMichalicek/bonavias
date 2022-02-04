import React from 'react';
import reactDOM from 'react-dom';
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
      <>
        <Header pages={this.pages} />
        <Footer />
      </>
    );
  }
}

reactDOM.render(<App />, document.getElementById('root'));
