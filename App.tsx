import React, { useMemo, useState } from "react";
import { AuthContext } from "./src/context/AuthContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./src/graphql";

import { BottomNav, DrawerNav } from "./src/navigation";
import { AuthLoading, Login, Register, Choose, Register2 } from "./src/screens";
import { createStackNavigator } from "@react-navigation/stack";

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
const RootStack = createStackNavigator();

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
      borderBottomsTop: "#333333",
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
      borderBottomsTop: "#333333",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <ApolloProvider client={apolloClient}>
      <PaperProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer theme={theme}>
            <RootStack.Navigator initialRouteName="DrawerNav">
              <RootStack.Screen
                name="AuthLoading"
                component={AuthLoading}
                options={{ headerShown: false }}
              />
              <RootStack.Screen
                name="DrawerNav"
                component={DrawerNav}
                options={{ headerShown: false }}
              />
              <RootStack.Screen
                name="Choose"
                component={Choose}
                options={{ headerShown: false }}
              />
              <RootStack.Screen
                name="Login"
                component={Login}
                options={{ headerTransparent: true }}
              />
              <RootStack.Screen
                name="_RegisterStack"
                component={_RegisterStack}
                options={{ headerTransparent: true, title: "Register" }}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </PaperProvider>
    </ApolloProvider>
  );
}

const RegisterStack = createStackNavigator();
const _RegisterStack = () => {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen name="Register" component={Register} />
      <RegisterStack.Screen name="Register2" component={Register2} />
    </RegisterStack.Navigator>
  );
};
