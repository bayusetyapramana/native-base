import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, List,
  ListItem, Left, Right, CheckBox
} from 'native-base';
import TodoItem from './components/TodoItem';
import {FlatList} from 'react-native';

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

renderRow(todo) {
  return(
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
  )
}

_keyExtractor = (item, index) => item.id;

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
            <FlatList
             data={this.todos}
             keyExtractor={this._keyExtractor}
             renderItem={({item}) => <TodoItem todo={item} />}
           />
            {/* {this.todos.map((todo)=> <TodoItem todo={todo} key={todo.id} />)} */}
          </List>
        </Content>
      </Container>
    );
  }
}
