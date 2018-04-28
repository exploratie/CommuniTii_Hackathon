import { TabNavigator } from "react-navigation"

import MessagingScreen from "./messaging"
import ProfileScreen from "./profile"
import QuestScreen from "./quest"

export default TabNavigator(
  {
    Quest: { screen: QuestScreen },
    Messaging: { screen: MessagingScreen },
    Profile: { screen: ProfileScreen }
  },
  { initialRouteName: "Quest" }
)
