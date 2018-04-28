import React from "react"
import Expo from "expo"

import Screens from "screens"

class App extends React.Component {
  state = {
    isReady: false
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    })
    this.setState({ isReady: true })
  }

  render() {
    return !this.state.isReady ? <Expo.AppLoading /> : <Screens />
  }
}

export default App
