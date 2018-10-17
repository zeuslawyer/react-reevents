import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    event: {
      title: "", // initial state is blank string which gets passed to input on form load
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
    }
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log("FORM SUBMITTED", this.state.event);
    this.props.handleCreateEvent(this.state.event)
  };

  onFormInputChange = (event) => {
    const newEvent = this.state.event;
    newEvent[event.target.name] = event.target.value
    this.setState({
     event: newEvent
    });
  };

  render() {
    const { handleCancel } = this.props;
    const { event } = this.state;

    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input
              onChange={this.onFormInputChange}
              name='title'
              value={event.title}
              placeholder="Event Name"
            />
          </Form.Field>

          <Form.Field>
            <label>Event Date</label>
            <input type="date" onChange={this.onFormInputChange} name='date' value={event.date} placeholder="Event Date" />
          </Form.Field>

          <Form.Field>
            <label>City</label>
            <input placeholder="City where event is taking place" onChange={this.onFormInputChange} name='city' value={event.city} />
          </Form.Field>

          <Form.Field>
            <label>Venue</label>
            <input placeholder="Enter the Venue of the event" onChange={this.onFormInputChange} name='venue' value={event.venue} />
          </Form.Field>

          <Form.Field>
            <label>Hosted By</label>
            <input placeholder="Enter the name of person hosting" name='hostedBy' onChange={this.onFormInputChange} value = {event.hostedBy} />
          </Form.Field>

          <Button onClick={this.onFormSubmit} positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
