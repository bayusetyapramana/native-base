import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, List,
  ListItem, Left, Right, CheckBox
} from 'native-base';

export default class  App extends Component {

todos = ['First Todo', 'Second Todo', 'Third Todo'];

  render(){
    return (
      <Container>

        <Header>
          <Body>
            <Text>Not To Do List</Text>
          </Body>
        </Header>
        <Content>
          <List>
            {this.todos.map((todo) => (
              <ListItem>
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
            )) }

          </List>
        </Content>
      </Container>
    );
  }
}
