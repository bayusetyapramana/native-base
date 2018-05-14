import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';

export default class  App extends Component {
  render(){
    return (
      <Container>

        <Header>
          <Body>
            <Text>Not To Do List</Text>
          </Body>
        </Header>
        <Content>
          <div style={styles.container}>
          <Text> Hello Native Base!</Text>
          </div>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1
},
})
