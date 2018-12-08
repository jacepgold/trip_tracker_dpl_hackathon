import React, { Component } from 'react';
import Trips from './components/Trips';
import { Segment, Header } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Trips />
        <br />
        <Segment inverted>
          <footer>
            <Header as='h3' style={{ color: 'white' }} textAlign='center'>Jace P. Gold</Header>
          </footer>
        </Segment>
      </div>
    );
  }
}

export default App;
