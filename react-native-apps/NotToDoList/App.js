import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, List,
  ListItem, Left, Right, CheckBox,
  Fab, Icon
} from 'native-base';
import TodoItem from './components/TodoItem';
import {FlatList} from 'react-native';

export default class  App extends Component {

state = {
  count : 0,
  todos: []

};

handleIncTodo() {
  let count = this.state.count + 1;
  let todos = this.state.todos;

  todos.push ({
    id: count,
    todo: "Not To Do #" + count
  });
  this.setState ({
    todos: todos,
    count: count
  });
}

renderRow(todo) {
  return(
    <ListItem key={todo.id}>
      <Left>
        <CheckBox checked={false} color={green}/>
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
            <Text>Not To Do List ({this.state.count})</Text>
          </Body>
        </Header>
        <Content>
          <List>
            {/* <FlatList
             data={this.state.todo}
             keyExtractor={this._keyExtractor}
             renderItem={({item}) => <TodoItem todo={item} />}
           /> */}
           {this.state.todos.map((todo)=> <TodoItem todo={todo} key={todo.id} />)}
          </List>
        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.handleIncTodo() }>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
