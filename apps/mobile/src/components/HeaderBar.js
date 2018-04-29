import React from "react"
import { Header, Left, Body, Title, Right, Icon, Button } from "native-base"
import { object } from "prop-types"

const HeaderBar = ({ navigation, ...restProps }) => (
  <Header>
    <Left>
      {navigation.state.routes.length > 1 && (
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon ios="ios-arrow-back" android="md-arrow-back" />
        </Button>
      )}
    </Left>
    <Body>
      {/* {console.log(restProps.getScreenDetails(restProps.scene).options)} */}
      <Title>{restProps.getScreenDetails(restProps.scene).options.title}</Title>
    </Body>
    <Right>
      {restProps.getScreenDetails(restProps.scene).options.right &&
        restProps
          .getScreenDetails(restProps.scene)
          .options.right({ navigation })}
    </Right>
  </Header>
)

HeaderBar.propTypes = {
  navigation: object
}

export default HeaderBar
