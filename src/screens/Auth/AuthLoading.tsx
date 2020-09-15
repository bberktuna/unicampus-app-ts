import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
} from "react-native";

const AuthLoading = (props) => {
  useEffect(() => {
    bootstrapAsync();
  });

  const bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("token");
    props.navigation.replace(userToken ? "DrawerNav" : "Choose");
  };

  return <ActivityIndicator style={{ ...StyleSheet.absoluteFillObject }} />;
};

export { AuthLoading };

const styles = StyleSheet.create({});
