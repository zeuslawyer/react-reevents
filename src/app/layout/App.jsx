import React, { Component } from 'react';
import EventDashboard from '../../features/eventdashboard/EventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/navbar/NavBar/NavBar'


class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <NavBar />
        <Container className = "main" >
          
          <EventDashboard/>
        </Container>
      </div>
    );
  }
}

export default App;
