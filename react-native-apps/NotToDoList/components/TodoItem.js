import React, {Component} from 'react';
import {
  Body, List, ListItem,
  Left, Right, CheckBox, Text
} from 'native-base';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  render() {
    const {todo: {id,todo}} = this.props;
    return (
      <ListItem key={id}>
        <Left>
          <CheckBox checked={true} />
        </Left>
        <Body>
          <Text>
            {todo}
          </Text>
        </Body>
        <Right/>
      </ListItem>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
