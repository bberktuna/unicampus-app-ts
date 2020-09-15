import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

const CustomFAB = ({ onPressFAB, iconFAB }) => {
  const { colors } = useTheme();
  return (
    <FAB
      style={[styles.fab, { backgroundColor: colors.text }]}
      icon={iconFAB}
      onPress={() => onPressFAB()}
      color={colors.background}
    />
  );
};

export { CustomFAB };

const styles = StyleSheet.create({
  fab: {
    flex: 1,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
