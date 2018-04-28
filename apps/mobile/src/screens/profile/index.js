import React from "react"
import { View, StyleSheet, Image, Text } from "react-native"
import { LinearGradient } from "expo"

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  info: {
    marginTop: 10,
    fontSize: 25,
    color: "white"
  },
  badges: {
    marginTop: 70,
    fontSize: 26,
    textDecorationLine: "underline",
    color: "white"
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
})

const ProfileScreen = () => (
  <LinearGradient
    colors={["#C94F4F", "#6C4CA7", "#444892"]}
    style={{ flex: 1, padding: 15, alignItems: "center", borderRadius: 5 }}
  >
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 75 }}
    >
      <Image
        style={styles.image}
        source={{
          uri:
            "https://www.gannett-cdn.com/-mm-/90f36cf57d9f4fe0182beb97e73c266f2e871e6e/c=0-54-1851-1446&r=x404&c=534x401/local/-/media/2018/02/16/USATODAY/USATODAY/636543864788750130-AP-MUSIC-DRAKE-94859299.JPG"
        }}
      />
      <Text style={styles.info}>Aubrey Drake Graham</Text>
      <Text style={{ color: "white", fontSize: 20 }}>Level 48</Text>
      <Text style={styles.badges}>Badges</Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image source={require("../../../assets/badges/tree.png")} />
        <Image source={require("../../../assets/badges/charity.png")} />
        <Image source={require("../../../assets/badges/helping-hand.png")} />
        <Image source={require("../../../assets/badges/community.png")} />
      </View>
    </View>
  </LinearGradient>
)

export default ProfileScreen
