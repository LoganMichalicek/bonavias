import React from 'react';
import reactDOM from 'react-dom';

interface AppProps {
  // intentionally blank, we don't have any props expected for App
}

class App extends React.Component {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Test Message</h1>
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('root'));
