import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    
    const {events} = this.props;

    return (
      <div>
        <h1>EVENT LIST </h1>

        {events.map((event) => {
         return  <EventListItem key = {event.id} event = {event}/>   
        })} 
        
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