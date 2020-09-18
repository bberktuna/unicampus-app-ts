import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  AsyncStorage,
} from "react-native";
import Animated from "react-native-reanimated";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {
  useTheme,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  ActivityIndicator,
} from "react-native-paper";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { useTheme as nativeUseTheme } from "@react-navigation/native";
import { Context as BigContext } from "../context/AuthContext";

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const { navigation } = props;

  const translateX = Animated.interpolate(props.progress, {
    inputRange: [0, 0.5, 0.7, 0.8, 1],
    outputRange: [-100, -85, -70, -45, 0],
  });

  function combinedSignout() {
    signout();
    navigation.navigate("Choose");
  }
  const { toggleTheme, signout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        //@ts-ignore
        style={[
          styles.drawerContent,
          {
            backgroundColor: paperTheme.colors.surface,
            transform: [{ translateX }],
          },
        ]}
      >
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                  }}
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                >
                  <Image
                    source={require("../../assets/brian.jpg")}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginLeft: 20,
                  }}
                >
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    Berk Tuna
                  </Paragraph>
                  <Caption style={styles.caption}>@raynauddddddd</Caption>
                </View>
              </View>
            </View>

            <Drawer.Section>
              <View style={[styles.row, { marginLeft: 20 }]}>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    --
                  </Paragraph>
                  <Caption style={styles.caption}>Following</Caption>
                </View>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    --
                  </Paragraph>
                  <Caption style={styles.caption}>Followers</Caption>
                </View>
              </View>
            </Drawer.Section>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Feather name="user" color={color} size={size} />
                )}
                label="Profile"
                onPress={() => navigation.navigate("ProfileStack")}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Feather name="bookmark" color={color} size={size} />
                )}
                label="Bookmarks"
                onPress={() => navigation.navigate("Bookmarks")}
              />

              <DrawerItem
                icon={({ color, size }) => (
                  <Feather name="moon" size={size} color={color} />
                )}
                label="Theme"
                onPress={() => {
                  toggleTheme();
                }}
              />
            </Drawer.Section>

            <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}
              >
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={paperTheme.dark} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="logout" size={size} color={color} />
            )}
            label="Sign Out"
            onPress={() => combinedSignout()}
          />
        </Drawer.Section>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  drawerAvatarOpacity: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
  },
  drawerAvatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 30,
  },
  drawerBackgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  profilePic: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderColor: "white",
    marginLeft: 15,
    marginTop: 15,
  },
});
