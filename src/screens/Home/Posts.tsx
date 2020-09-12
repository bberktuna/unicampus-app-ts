import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { PostList } from "./components";
import { useTheme } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FAB } from "react-native-paper";

interface Props {
  navigation: any;
}
const DenemePosts = [{}];

const Posts: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <FlatList
        data={DenemePosts} // data will kkommm from usequeries codegen xDXD
        keyExtractor={(item) => `${item}`}
        renderItem={({ item }) => (
          <PostList
            {...(item as any)}
            onPress={() => navigation.navigate("PostDetail", { item })}
          />
        )}
      />
      <FAB
        style={[styles.fab, { backgroundColor: colors.text }]}
        icon="plus"
        onPress={() => console.log("CreatePost")}
      />
    </View>
  );
};

export { Posts };

const styles = StyleSheet.create({
  fab: {
    flex: 1,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
  },
});
