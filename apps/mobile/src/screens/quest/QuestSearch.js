import React from "react"
import { View, Input, Button, Icon, Item } from "native-base"
import { MapView } from "expo"
import { StyleSheet } from "react-native"

class QuestSearchScreen extends React.Component {
  static navigationOptions = {
    title: "Quest"
  }

  render() {
    return (
      <View style={screenContainer}>
        <MapView
          style={map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <View style={inputContainer}>
          <Item rounded style={input}>
            <Input placeholder="Zipcode" keyboardType="numeric" />
          </Item>
          <Button rounded style={inputBtn}>
            <Icon ios="ios-compass" android="md-compass" />
          </Button>
        </View>
      </View>
    )
  }
}

const {
  screenContainer,
  map,
  inputContainer,
  input,
  inputBtn
} = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    flex: 1
  },
  inputContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    position: "absolute",
    top: 0,
    left: 5,
    right: 5,
    flexDirection: "row"
  },
  input: {
    height: 36,
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    flex: 1
  },
  inputBtn: {
    marginRight: 10,
    height: 36,
    padding: 10,
    marginTop: 20
  }
})

export default QuestSearchScreen
