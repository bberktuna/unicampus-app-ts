import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useCreatePostMutation } from "../../graphql";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const CreatePost = ({ navigation, route }) => {
  //const { item } = route.params;
  const [createPlaceMutation] = useCreatePostMutation({
    async onCompleted({ createPost }) {
      navigation.navigate("Posts");
    },
  });

  const { colors } = useTheme();
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topFlex}>
        <View style={styles.topLeftFlex}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="window-close" size={35} />
          </TouchableOpacity>

          <Image
            source={require("../../../assets/brian.jpg")}
            style={styles.profilePic}
          />
        </View>
        <View style={styles.topRightFlex}>
          <TextInput
            multiline={true}
            onChangeText={(val) => setText(val)}
            value={text}
            autoCorrect={false}
            autoCapitalize="none"
            style={[
              styles.input,
              { color: colors.text, borderLeftColor: colors.text },
            ]}
          />
        </View>
      </View>
      <View style={[styles.bottomFlex, { borderTopColor: colors.text }]}>
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
            createPlaceMutation({
              variables: { text }, // FUTUERS ON THE WAY -- PICTURES
            })
          }
        >
          <Text style={{ fontSize: 18 }}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { CreatePost };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  topFlex: {
    flex: 85,
    borderColor: "green",
    flexDirection: "row",
  },
  topRightFlex: {
    flex: 85,
  },
  topLeftFlex: {
    flex: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bottomFlex: {
    flex: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottom1: {},

  input: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlignVertical: "top",
    marginLeft: 10,
    paddingHorizontal: 10,
    marginTop: 45,
  },
  profilePic: {
    marginTop: 15,
    width: width / 7,
    height: height / 12,
    borderRadius: width / 2,
    marginLeft: 5,
  },
});
