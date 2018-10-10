import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    return (
      <div>
        <h1>EVENT LIST comprising of EVENT LIST ITEM components</h1>
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </div>
    );
  }
}

//STATELESS FUNCTIONAL COMPONENT
//  const EventList = () => {

//     return (
//       <div>

//       </div>
//     )

// }

export default EventList;
