import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ProfileComments, ProfileMedia, ProfilePosts } from "./components/";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@react-navigation/native";
const ProfileTop = createMaterialTopTabNavigator();

const { width, height } = Dimensions.get("window");

const Profile = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.outTop}>
        <View style={styles.insideTop}>
          <ImageBackground
            source={require("../../../assets/wp.jpg")}
            style={[
              styles.topImageBackground,
              { borderBottomColor: colors.text },
            ]}
          />
        </View>
        <View style={styles.insideMid}>
          <Image
            source={require("../../../assets/brian.jpg")}
            style={styles.midProfilePic}
          />
        </View>
        <View style={styles.insideBot}></View>
      </View>
      <View style={styles.outBot}>
        <ProfileTop.Navigator backBehavior="history">
          <ProfileTop.Screen name="ProfilePosts" component={ProfilePosts} />
          <ProfileTop.Screen
            name="ProfileComments"
            component={ProfileComments}
          />
          <ProfileTop.Screen name="ProfileMedia" component={ProfileMedia} />
        </ProfileTop.Navigator>
      </View>
    </View>
  );
};

export { Profile };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outTop: {
    flex: 5,
    borderWidth: 3,
    borderColor: "red",
  },
  outBot: {
    flex: 5,
    borderWidth: 3,
    borderColor: "blue",
  },
  insideTop: { flex: 4, borderBottomWidth: 1 },
  insideMid: { flex: 2.5, borderWidth: 1 },
  insideBot: { flex: 3.5, borderWidth: 1 },
  topImageBackground: {
    width: "100%",
    height: "100%",
  },
  midProfilePic: {
    width: "20%",
    height: "100%",
    borderRadius: width / 2,
    borderWidth: 1,
  },
});
