import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRegisterMutation } from "../../graphql";

const { width, height } = Dimensions.get("window");
const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [registerMutation] = useRegisterMutation({
    async onCompleted({ register }) {
      const { token } = register;
      if (token) {
        try {
          await AsyncStorage.setItem("token", token);
          navigation.replace("DrawerNav");
          console.log("am i working bro");
        } catch (error) {
          console.log(error.message);
        }
      }
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {/*<Image
        source={require("../../../assets/icons/person2-outline.png")}
        style={styles.topIcon}
      />*/}
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
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
        onPress={() =>
          registerMutation({ variables: { email, username, password } })
        }
      >
        <Text style={{ fontSize: 18 }}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export { Register };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },

  input: {
    width: width - 40,
    height: 60,
    marginTop: 5,
    borderBottomWidth: 1,
  },
  topIcon: {
    width: width / 2.4,
    height: height / 4,
  },
});
