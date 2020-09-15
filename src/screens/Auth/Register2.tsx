import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { width } = Dimensions.get("window");

const Register2 = ({ navigation }) => {
  const { colors } = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.topFlex}>
        <TextInput
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Username"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: width / 2,
            width: width / 1.5,
            height: width / 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
          onPress={() => navigation.navigate("DrawerNav")}
        >
          <Text style={{ fontSize: 18 }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { Register2 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    width: width - 40,
    height: 60,
    marginTop: 5,
    borderBottomWidth: 1,
  },
  topFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 70,
  },
});

// password
// username  for now !!
