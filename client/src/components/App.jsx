import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {

  // }

  onSubmit(e) {
    e.preventDefault();
    console.log('Hiya!');
    $.get('http://localhost:3000/submit');
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='name'></input>
          <input type='text' placeholder='email'></input>
          <input type='text' placeholder='phone'></input>
          <button type='submit' onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
