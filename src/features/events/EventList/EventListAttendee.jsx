import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";


// const randomUserUrl = "https://randomuser.me/api/portraits/women/85.jpg";

class EventListAttendee extends Component {
  


  render() {
    //receive prop from Event List Item Component
    const {attendee} = this.props;
    
    return (
      <List.Item>
        <Image as="a" size="mini" circular src={attendee.photoURL} />
      </List.Item>
    );
  }
}

export default EventListAttendee;
