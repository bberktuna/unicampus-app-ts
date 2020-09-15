import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { CustomFAB } from "../../components";

const Notifications = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Text>NOTIFICATION SCREEN</Text>
      <CustomFAB
        iconFAB="feather"
        onPressFAB={() => navigation.navigate("CreatePost")}
      />
    </View>
  );
};

export { Notifications };

const styles = StyleSheet.create({
  fab: {
    flex: 1,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
