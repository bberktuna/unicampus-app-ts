import React from "react";
import { DrawerContent } from "../../src/navigation/DrawerContent";
import { BottomNav } from "../navigation/BottomNav";
import { Ionicons, Entypo } from "@expo/vector-icons";
//navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

//screens
import { Profile, Bookmarks, Settings } from "../../src/screens";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

export function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomNav" component={BottomNav} />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} />
      <Drawer.Screen name="Bookmarks" component={Bookmarks} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

const _ProfileStack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <_ProfileStack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Ionicons
            name="ios-arrow-back"
            size={35}
            color={colors.text}
            onPress={() => navigation.goBack()}
            style={styles.headerLeftStyle}
          />
        ),
        headerRight: () => (
          <Entypo
            name="dots-three-vertical"
            size={28}
            color="black"
            style={styles.headerRightStyle}
            onPress={() => console.log("little thing will appear")}
          />
        ),
      }}
    >
      <_ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTransparent: true, headerTitle: "" }}
      />
    </_ProfileStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeftStyle: {
    justifyContent: "center",
    marginLeft: 15,
  },
  headerRightStyle: {
    justifyContent: "center",
    marginRight: 15,
  },
});
