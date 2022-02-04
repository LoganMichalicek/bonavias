import React from 'react';
import reactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  constructor(props: null) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('root'));
