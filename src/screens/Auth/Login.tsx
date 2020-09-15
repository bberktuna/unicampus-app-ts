import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  AsyncStorage,
} from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLoginMutation } from "../../graphql";

const { width } = Dimensions.get("window");
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginMutation] = useLoginMutation({
    async onCompleted({ login }) {
      const { token } = login;
      if (token) {
        try {
          await AsyncStorage.setItem("token", token);
          navigation.replace("DrawerNav");
        } catch (error) {
          console.log(error.message);
        }
      }
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topFlex}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email or Username"
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
          onPress={() => {
            // EMAIL VALIDATION
            const isEmail = email.includes("@");
            isEmail
              ? loginMutation({
                  variables: { email, password },
                })
              : loginMutation({
                  variables: { username: email, password },
                });
          }}
        >
          <Text style={{ fontSize: 18 }}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{ flexDirection: "row" }}
        >
          <Text>Don't have an account? </Text>
          <Text style={{ color: "skyblue" }}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("FORGOT PASSWORD")} // USEMUTATION HERE
          style={{ marginTop: 15 }}
        >
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export { Login };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },

  input: {
    width: width - 40,
    height: 60,
    marginTop: 5,
    borderBottomWidth: 1,
  },
});
