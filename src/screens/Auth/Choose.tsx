import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

const Choose = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={styles.column}></View>
      <View style={styles.columnMid}>
        <View style={styles.rowTop}>
          <Text style={styles.bigText}>See what's </Text>
          <Text style={styles.bigText}>happening in your</Text>
          <Text style={styles.bigText}>university right now.</Text>
        </View>
        <View style={styles.rowMid}>
          <TouchableOpacity
            onPress={() => navigation.navigate("_RegisterStack")}
            style={styles.createOpacity}
          >
            <Text style={{ fontSize: 20 }}>Create account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowBot}>
          <Text style={{ fontSize: 18 }}>Have an account already?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontSize: 18, color: "skyblue" }}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.column}></View>
    </View>
  );
};

export { Choose };

const styles = StyleSheet.create({
  column: {
    flex: 15,
  },
  columnMid: {
    flex: 85,
  },
  rowTop: {
    flex: 50,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  rowMid: {
    flex: 25,
    justifyContent: "center",
  },
  rowBot: {
    flex: 25,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  bigText: {
    fontSize: 28,
  },
  createOpacity: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
  },
});
