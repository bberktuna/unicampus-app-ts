import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { PostList } from "./components";
import { useTheme } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FAB } from "react-native-paper";
import { usePostsQuery } from "../../graphql";
import { CustomFAB } from "../../components";

interface Props {
  navigation: any;
}

const Posts: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme();
  const { data, refetch } = usePostsQuery();

  return (
    <View style={styles.container}>
      <FlatList
        data={data && data.posts ? data.posts : []} // data will kkommm from usequeries codegen xDXD
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostList
            {...(item as any)}
            onPress={() => navigation.navigate("PostDetail", { item })}
          />
        )}
      />
      <CustomFAB
        iconFAB="feather"
        onPressFAB={() => navigation.navigate("CreatePost", { item: {} })}
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
