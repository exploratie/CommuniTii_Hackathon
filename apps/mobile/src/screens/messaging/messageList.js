import React, { Component } from "react"
import {
  Container,
  Content,
  ListItem,
  Thumbnail,
  Text,
  View,
  List
} from "native-base"
import { StyleSheet } from "react-native"

export default class Message extends Component {
  messages = [
    {
      text: "this is crazy",
      thumb: "./img.jpg"
    },
    {
      text: "We got loads to do",
      thumb: "./img1.jpg"
    }
  ]

  pushMessage = () =>
    this.messages.push({
      text: "THs shit works",
      thumb: "./img1.jpg"
    })

  renderRow = data => (
    <ListItem>
      <View style={styles.messageContainer}>
        <View style={styles.thumbnailContainer}>
          <Thumbnail
            style={styles.image}
            square
            source={require("../../../assets/chatheads/kenneth.jpg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>{data.text}</Text>
        </View>
      </View>
    </ListItem>
  )
  render() {
    return (
      <Container>
        <Content>
          <View>
            <List dataArray={this.messages} renderRow={this.renderRow} />
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    flexDirection: "row"
  },
  thumbnailContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 20,
    marginLeft: 10
  },
  textContainer: {
    flex: 4,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 10,
    marginRight: 10
  },
  image: {
    height: 50,
    borderRadius: 25,
    width: 50
  }
})
