import { StackNavigator } from "react-navigation"

import HeaderBar from "components/HeaderBar"
import QuestSearchScreen from "./QuestSearch"

export default StackNavigator(
  {
    QuestSearch: { screen: QuestSearchScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: HeaderBar
    })
  }
)
