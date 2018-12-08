import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';

class TripForm extends React.Component {
  state = { name: '', description: '', startDate: '', }

  render() {
    return(
      <Form>
        <Header as='h2'>Create New Trip</Header>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            name='name'
            placeholder='Name of Trip'
          />
          <Form.Input fluid name='description' placeholder='Tell us about this trip...' />
          <Button type='submit' color='green'>Submit</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default TripForm;