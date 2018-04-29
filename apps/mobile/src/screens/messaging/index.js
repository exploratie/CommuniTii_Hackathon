import React from "react"
import { View, Text } from "react-native"
import { StackNavigator } from "react-navigation"
import MessageListScreen from "./messageList"

export default StackNavigator({ MessageList: { screen: MessageListScreen } })
