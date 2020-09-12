import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerNav } from "./DrawerNav";
import { BottomNav } from "./BottomNav";

const Drawer = createDrawerNavigator();

const AppNav = (navProps) => {
  return (
    <NavigationContainer /*theme={navigationTheme}*/>
      <Drawer.Navigator
        drawerContent={(props) => (
          <DrawerNav {...props} /*toggleTheme={navProps.toggleTheme} */ />
        )}
      >
        <Drawer.Screen name="Posts" component={BottomNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export { AppNav };

const styles = StyleSheet.create({});
