import React, { Component } from 'react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
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
