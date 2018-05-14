import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, List,
  ListItem, Left, Right, CheckBox
} from 'native-base';

export default class  App extends Component {

todos = [
  {
    id: "1",
    todo: "First Todo"
  },
  {
    id: "2",
    todo: "Second Todo"
  },
  {
    id: "3",
    todo: "Third Todo"
  }
];

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
              <ListItem key={todo.id}>
                <Left>
                  <CheckBox checked={true} />
                </Left>
                <Body>
                  <Text>
                    {todo.todo}
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
