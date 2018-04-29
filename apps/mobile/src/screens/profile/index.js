import React from "react"
import { StyleSheet, Image } from "react-native"
import { Text, View } from "native-base"
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
    color: "white",
    fontWeight: "bold"
  },
  badges: {
    height: 50,
    width: 50,
    marginRight: 25
  },
  badgesexception: {
    height: 50,
    width: 50
  },
  bubbletext: {
    color: "white",
    paddingLeft: 30,
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  loading_bar_large: {
    marginTop: 20,
    height: 30,
    width: 300,
    borderRadius: 90,
    borderWidth: 0.75,
    borderColor: "#191919"
  },
  loading_bar_small: {
    height: 30,
    width: 225,
    borderRadius: 90,
    borderWidth: 0.75,
    backgroundColor: "#57B151",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  questloginfo: {
    paddingLeft: 20,
    color: "#B24AB4",
    paddingTop: 15,
    fontSize: 18
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
      <View style={styles.loading_bar_large}>
        <View style={styles.loading_bar_small}>
          <Text
            style={{
              color: "#D3EAD2",
              marginBottom: 5,
              marginRight: 10,
              fontWeight: "bold"
            }}
          >
            75%
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#191919",
          height: 100,
          width: 330,
          borderRadius: 30,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: 20
        }}
      >
        <Text style={styles.bubbletext}>Badges</Text>
        <View
          style={{
            marginTop: 5,
            marginBottom: 10,
            marginLeft: 25,
            flex: 1,
            flexDirection: "row"
          }}
        >
          <Image
            style={styles.badges}
            source={require("../../../assets/badges/tree.png")}
          />
          <Image
            style={styles.badges}
            source={require("../../../assets/badges/charity.png")}
          />
          <Image
            style={styles.badges}
            source={require("../../../assets/badges/helping-hand.png")}
          />
          <Image
            style={styles.badgesexception}
            source={require("../../../assets/badges/community.png")}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#191919",
          height: 240,
          width: 330,
          borderRadius: 30,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: 15
        }}
      >
        <Text style={styles.bubbletext}>Quest Log</Text>
        <Text style={styles.questloginfo}>
          Planted a Tree{"\n"}
          <Text style={{ fontSize: 14, color: "white" }}>Date: Sept. 5</Text>
        </Text>
        <Text style={styles.questloginfo}>
          Adopted a Cat{"\n"}
          <Text style={{ fontSize: 14, color: "white" }}>Date: April. 18</Text>
        </Text>
        <Text style={styles.questloginfo}>
          Donated $1 million for God's Plan music video{"\n"}
          <Text style={{ fontSize: 14, color: "white" }}>Date: Jan. 5</Text>
        </Text>
      </View>
    </View>
  </LinearGradient>
)

export default ProfileScreen
