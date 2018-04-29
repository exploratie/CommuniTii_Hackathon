import React from "react"
import { Button, Text, Icon, Footer, FooterTab } from "native-base"
import { object } from "prop-types"

const BottomBar = props => (
  <Footer>
    <FooterTab>
      <Button
        vertical
        active={props.navigationState.index === 0}
        onPress={() => props.navigation.navigate("Quest")}
      >
        <Icon name="search" />
        <Text>Quest</Text>
      </Button>
      <Button
        vertical
        active={props.navigationState.index === 1}
        onPress={() => props.navigation.navigate("Messaging")}
      >
        <Icon ios="ios-chatbubbles" android="md-chatbubbles" />
        <Text>Messaging</Text>
      </Button>
      <Button
        vertical
        active={props.navigationState.index === 2}
        onPress={() => props.navigation.navigate("Profile")}
      >
        <Icon ios="ios-person" android="md-person" />
        <Text>Profile</Text>
      </Button>
    </FooterTab>
  </Footer>
)

BottomBar.propTypes = {
  navigationState: object,
  navigation: object
}

export default BottomBar
