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
            <Text>Search</Text>
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
                <Text note>2:29 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/kanye.jpg")}
                />
              </Left>
              <Body>
                <Text>Kanye West</Text>
                <Text note>What time is your Doctor's appointment?</Text>
              </Body>
              <Right>
                <Text note>3:22 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/kanye.jpg")}
                />
              </Left>
              <Body>
                <Text>Kanye West</Text>
                <Text note>Wanna go to Chick-Fil-A with me tonight?</Text>
              </Body>
              <Right>
                <Text note>1:23 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/kanye.jpg")}
                />
              </Left>
              <Body>
                <Text>Kanye West</Text>
                <Text note> He's not coming over tonight. </Text>
              </Body>
              <Right>
                <Text note>9:19 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/kanye.jpg")}
                />
              </Left>
              <Body>
                <Text>Kanye West</Text>
                <Text note>okay.</Text>
              </Body>
              <Right>
                <Text note>8:12 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/kanye.jpg")}
                />
              </Left>
              <Body>
                <Text>Kanye West</Text>
                <Text note>I would if i could.</Text>
              </Body>
              <Right>
                <Text note>1:02 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/kanye.jpg")}
                />
              </Left>
              <Body>
                <Text>Kanye West</Text>
                <Text note>...</Text>
              </Body>
              <Right>
                <Text note>7:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/kanye.jpg")}
                />
              </Left>
              <Body>
                <Text>Kanye West</Text>
                <Text note>I need help!</Text>
              </Body>
              <Right>
                <Text note>5:33 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={require("../../../assets/avatars/kanye.jpg")}
                />
              </Left>
              <Body>
                <Text>Kanye West</Text>
                <Text note>Sounds good!</Text>
              </Body>
              <Right>
                <Text note>7:33 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
