import React from 'react';
import { Item, Button, Divider, } from 'semantic-ui-react';

class Trip extends React.Component {

  render() {
    const { id, name, description } = this.props;
    return(
      <React.Fragment>
        <Item>
          <Item.Image size='tiny' src='https://upload.wikimedia.org/wikipedia/commons/0/08/South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg' />
          <Item.Content>
            <Item.Header as='a'>Trip { id } = { name }</Item.Header>
            <Item.Meta>Start Date</Item.Meta>
            <Item.Description>
              { description }
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
            <Button>Edit</Button>
            <Button color='red' onClick={ () => this.props.delete(id) }>Delete</Button>
          </Item.Content>
        </Item>
        <Divider />
      </React.Fragment>
    );
  }
}

export default Trip;