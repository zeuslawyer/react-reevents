import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    // fetch events list from props (props passed by Event Dashboard Parent)
    const {events} = this.props;
    return (
      <div>
        <h1>EVENT LIST </h1>
       { events.map( eventItem => {
           <EventListItem key = {eventItem.id} event = {eventItem}/>   
        }) } 
        
      </div>
    );
  }
}


export default EventList;



//STATELESS FUNCTIONAL COMPONENT
//  const EventList = () => {

//     return (
//       <div>

//       </div>
//     )

// }