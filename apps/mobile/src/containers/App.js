import React from "react"
import Expo from "expo"
import { Provider } from "react-redux"

import Screens from "screens"
import initStore from "lib/initStore"

const store = initStore()

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
    return !this.state.isReady ? (
      <Expo.AppLoading />
    ) : (
      <Provider store={store}>
        <Screens />
      </Provider>
    )
  }
}

export default App
