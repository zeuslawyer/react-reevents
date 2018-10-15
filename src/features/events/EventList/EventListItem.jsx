import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const randomUserUrl = "https://randomuser.me/api/portraits/women/54.jpg";

class EventListItem extends Component {
  render() {
    const { eventItem } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={eventItem.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{eventItem.title}}</Item.Header>
                <Item.Description>
                  Hosted by <a>{eventItem.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {eventItem.date} |<Icon name="marker" />{" "}
            {eventItem.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            { eventItem.attendees.map(attendee => {
               <EventListAttendee key={attendee.id} attendee={attendee} />;
            }) }
          </List>
        </Segment>
        <Segment clearing>
          <span>{eventItem.description}</span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
