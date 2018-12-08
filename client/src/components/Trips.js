import React from 'react';
import axios from 'axios';
import Trip from './Trip';
import TripForm from './TripForm';
import { Container, Item, Header, Divider } from 'semantic-ui-react';

class Trips extends React.Component {

  state = { trips: [], }

  componentDidMount() {
    axios.get('api/trips')
      .then(res => {
        this.setState({ trips: res.data, });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderTrips = () => {
    return this.state.trips.map(trip => (
      <Trip
        key={trip.id}
        {...trip}
        delete={this.deleteTrip}
      />
    ));
  }

  deleteTrip = (id) => {
    axios.delete(`api/trips/${id}`)
      .then(res => {
        const { trips } = this.state;
        this.setState({ trips: trips.filter(trip => trip.id !== id) })
      }).catch(err => {
        console.log(err)
      });
  }

  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>Trip Tracker</Header>
        <br />
        <TripForm />
        <Divider />
        <br />
        <Header as='h1'>Trips</Header>
        <Item.Group>
          { this.renderTrips() }
        </Item.Group>
      </Container>
    );
  }
}

export default Trips;