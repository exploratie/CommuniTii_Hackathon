import React from "react"
import { View, Text } from "react-native"

import { StackNavigator } from "react-navigation"

const QuestSearchScreen = () => (
  <View>
    <Text>This is Quest</Text>
  </View>
)

export default StackNavigator({
  QuestSearch: { screen: QuestSearchScreen }
})
