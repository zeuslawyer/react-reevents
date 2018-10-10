import React, { Component } from 'react'
import EventList from '../EventList/EventList'
import {Grid} from 'semantic-ui-react';

class EventDashboard extends Component {
  render() {
    return (
         <Grid>
             <Grid.Column width  = {10}>
                {/* EVENT LIST COMPONENTS ...  */}
                <EventList/>
             </Grid.Column>

             <Grid.Column width  = {6}>
                <h2>RIGHT COLUMN</h2>
             </Grid.Column>
         </Grid>

    )
  }
}


export default EventDashboard;

