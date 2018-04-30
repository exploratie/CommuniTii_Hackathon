import React, { Component } from "react"
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Item,
  Icon,
  Button,
  Input
} from "native-base"

export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Add</Text>
          </Button>
        </Header>{" "}
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/kanye.jpg")}
                />
              </Left>
              <Body>
                <Text>Kanye West</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>8:29 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/khaled.jpg")}
                />
              </Left>
              <Body>
                <Text>DJ Khaled</Text>
                <Text note>
                  Dont play yourself. They dont want you to win!{" "}
                </Text>
              </Body>
              <Right>
                <Text note>7:22 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/big_sean.jpg")}
                />
              </Left>
              <Body>
                <Text>Big Sean</Text>
                <Text note>Wanna go to Chick-Fil-A with me tonight?</Text>
              </Body>
              <Right>
                <Text note>5:23 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/cardi.jpg")}
                />
              </Left>
              <Body>
                <Text>Cardi B</Text>
                <Text note> I miss you.. Please contact me ASAP! </Text>
              </Body>
              <Right>
                <Text note>2:19 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/eminem.jpg")}
                />
              </Left>
              <Body>
                <Text>Eminem</Text>
                <Text note>
                  I am not avaliable tonight. Lets meet tomorrow.{" "}
                </Text>
              </Body>
              <Right>
                <Text note>06/21/2018</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/lebron.jpg")}
                />
              </Left>
              <Body>
                <Text>Lebron James</Text>
                <Text note>
                  I've achieved everything there is to be achieved.{" "}
                </Text>
              </Body>
              <Right>
                <Text note>06/21/2018</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/nicki.jpg")}
                />
              </Left>
              <Body>
                <Text>Nicki Minaj</Text>
                <Text note>Get ready! Im dropping a new project tonight.</Text>
              </Body>
              <Right>
                <Text note>06/20/2018</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/pharell.jpg")}
                />
              </Left>
              <Body>
                <Text>Pharrel Williams</Text>
                <Text note>I need help!</Text>
              </Body>
              <Right>
                <Text note>06/19/2018</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/rihanna.jpg")}
                />
              </Left>
              <Body>
                <Text>Rihanna</Text>
                <Text note>Sounds good!</Text>
              </Body>
              <Right>
                <Text note>06/19/2018</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
