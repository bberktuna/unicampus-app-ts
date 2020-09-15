import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { CustomFAB } from "../../components";

const Messages = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Text>MESSAGES SCREEN</Text>
      <CustomFAB
        iconFAB="plus"
        onPressFAB={() => console.log("GOING TO CREATEMESSAGE SCREEN ")}
        // navigation.navigate("CreateMessage")
      />
    </View>
  );
};

export { Messages };

const styles = StyleSheet.create({
  fab: {
    flex: 1,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
