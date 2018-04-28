import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
    borderRadius: 40
  },
  info: {
    marginTop: 10,
    fontSize: 20,
  },
  badges: {
    marginTop: 15,
    fontSize: 26,
    textDecorationLine: "underline",
  }
});

const ProfileScreen = () => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        flex: 1.5,
        backgroundColor: "#C94F4F",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri:
            "https://www.gannett-cdn.com/-mm-/90f36cf57d9f4fe0182beb97e73c266f2e871e6e/c=0-54-1851-1446&r=x404&c=534x401/local/-/media/2018/02/16/USATODAY/USATODAY/636543864788750130-AP-MUSIC-DRAKE-94859299.JPG"
        }}
      />
      <Text style={styles.info}>Aubrey Drake Graham</Text>
      <Text>Level 48</Text>
    </View>

    <View
      style={{
        flex: 2,
        backgroundColor: "#444892",
        alignItems: "center"
      }}
    >
      <Text style={styles.badges}>Badges</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            "./assets/icons8-oak-tree-64.png"
        }}
      />
    </View>
  </View>
);

export default ProfileScreen;
