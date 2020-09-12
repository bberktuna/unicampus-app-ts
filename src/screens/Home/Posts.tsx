import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CustomFAB } from "../../components";
import { PostList } from "./components";
interface Props {
  navigation: any;
}
const DenemePosts = [{}];

const Posts: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DenemePosts}
        keyExtractor={({ item, index }) => `${index}`}
        renderItem={({ index }) => <PostList />}
      />
      <View style={styles.fab}>
        <CustomFAB
          icon="plus"
          onPressFab={() => navigation.navigate("CreatePost")}
        />
      </View>
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
