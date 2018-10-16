import React, { Component } from "react";
import EventList from "../EventList/EventList";
import EventForm from "../../EventForm/EventForm";
import { Grid, Button } from "semantic-ui-react";

// array of static events to use as seeding data
const events = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

//COMPONENT - Parent level
class EventDashboard extends Component {

  // delete constructor function and changed this.state to state 
    state = {    
      events: events,
      isOpen: false
    };

    // no need for this if methods declared with  arrow functions that return arrow functions
    // this._handleCancel = this._handleCancel.bind(this)
    // this._handleFormOpen = this._handleFormOpen.bind(this)
  

  // methods are now functions that return functions, using arrow function syntax. 
  // then removes the need for binding and constructor too
  _handleFormOpen = () => {   
    this.setState({
      isOpen:true
    })
  }

  _handleCancel = () => {
    this.setState({
      isOpen: false
    })
  }


  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={this.state.events} />
        </Grid.Column>

        <Grid.Column width={6}>
          <Button  onClick = {this._handleFormOpen} positive content="Create Event" />
          {/* if conditional shown by &&*/}
          { this.state.isOpen &&
           <EventForm handleCancel = {this._handleCancel}/>  }  

        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
