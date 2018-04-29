import { TabNavigator } from "react-navigation"

import MessagingScreen from "./messaging"
import ProfileScreen from "./profile"
import QuestScreen from "./quest"
import BottomBar from "components/BottomBar"

export default TabNavigator(
  {
    Quest: { screen: QuestScreen },
    Messaging: { screen: MessagingScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    initialRouteName: "Quest",
    tabBarPosition: "bottom",
    tabBarComponent: BottomBar
  }
)
