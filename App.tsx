import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "./src/context/AuthContext";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerNav } from "./src/navigation/DrawerNav";
import { BottomNav } from "./src/navigation/BottomNav";

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

const Drawer = createDrawerNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const authContext = React.useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#000000",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#000000",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Drawer.Navigator drawerContent={(props) => <DrawerNav {...props} />}>
            <Drawer.Screen name="Posts" component={BottomNav} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}
