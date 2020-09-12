import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Ionicons,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";

//SCREENSSSSSSSSSSSSSS
import {
  Posts,
  Search,
  Notifications,
  Messages,
  PostDetail,
  CreatePost,
  CreateMessage,
} from "../screens";
import { color } from "react-native-reanimated";

const Bottom = createMaterialBottomTabNavigator();

const headerOff = () => ({
  headerShown: false,
});

function BottomNav() {
  const { colors } = useTheme();

  return (
    <React.Fragment>
      <Bottom.Navigator
        labeled={false}
        screenOptions={{ tabBarColor: colors.background }}
        barStyle={{ borderTopWidth: 0.5, borderColor: colors.text }}
      >
        <Bottom.Screen
          name="_FeedStack"
          component={_FeedStack}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/icons/home.png")
                    : require("../../assets/icons/home-outline.png")
                }
                style={[styles.bottomTabIcon, { tintColor: colors.text }]}
              />
            ),
          }}
        />

        <Bottom.Screen
          name="_SearchStack"
          component={_SearchStack}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/icons/search.png")
                    : require("../../assets/icons/search-outline.png")
                }
                style={[styles.bottomTabIcon, { tintColor: colors.text }]}
              />
            ),
          }}
        />

        <Bottom.Screen
          name="_NotificationsStack"
          component={_NotificationsStack}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/icons/notification.png")
                    : require("../../assets/icons/notification-outline.png")
                }
                style={[styles.bottomTabIcon, { tintColor: colors.text }]}
              />
            ),
          }}
        />

        <Bottom.Screen
          name="_MessagesStack"
          component={_MessagesStack}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/icons/message.png")
                    : require("../../assets/icons/message-outline.png")
                }
                style={[styles.bottomTabIcon, { tintColor: colors.text }]}
              />
            ),
          }}
        />
      </Bottom.Navigator>
    </React.Fragment>
  );
}

const headerOptions = ({ navigation }: any) => ({
  //headerTintColor: colors.text,
  //headerStyle: { backgroundColor: colors.background },

  headerLeft: () => (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={{ marginLeft: 10 }}
    >
      <Avatar.Image size={40} source={require("../../assets/brian.jpg")} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity
      onPress={() => {}} //navigation.navigate("Profile")
    >
      <Feather
        name="settings"
        size={30}
        color="black"
        style={styles.headerRightAvatar}
      />
    </TouchableOpacity>
  ),
});

const PostsStack = createStackNavigator();
const SearchStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const MessagesStack = createStackNavigator();

const _FeedStack = () => {
  const { colors } = useTheme();
  return (
    <PostsStack.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
          borderBottomWidth: 1,
        },
        headerTitleAlign: "center",
      }}
    >
      <PostsStack.Screen
        name="Posts"
        component={Posts}
        options={headerOptions}
      />
      <PostsStack.Screen name="PostDetail" component={PostDetail} />
      <PostsStack.Screen name="CreatePost" component={CreatePost} />
    </PostsStack.Navigator>
  );
};

const _SearchStack = () => {
  const { colors } = useTheme();
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
          borderBottomWidth: 1,
        },
        headerTitleAlign: "center",
      }}
    >
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={headerOptions}
      />
    </SearchStack.Navigator>
  );
};

const _NotificationsStack = () => {
  const { colors } = useTheme();
  return (
    <NotificationsStack.Navigator
      initialRouteName="Notifications"
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
          borderBottomWidth: 1,
        },
        headerTitleAlign: "center",
      }}
    >
      <NotificationsStack.Screen
        name="Notifications"
        component={Notifications}
        options={headerOptions}
      />
      <NotificationsStack.Screen name="CreatePost" component={CreatePost} />
    </NotificationsStack.Navigator>
  );
};

const _MessagesStack = () => {
  const { colors } = useTheme();
  return (
    <MessagesStack.Navigator
      initialRouteName="Messages"
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
          borderBottomWidth: 1,
        },
        headerTitleAlign: "center",
      }}
    >
      <MessagesStack.Screen
        name="Messages"
        component={Messages}
        options={headerOptions}
      />
      <MessagesStack.Screen name="CreateMessage" component={CreateMessage} />
    </MessagesStack.Navigator>
  );
};

export { BottomNav };

const styles = StyleSheet.create({
  headerLeftAvatar: {
    marginLeft: 10,
  },
  headerRightAvatar: {
    marginRight: 10,
  },
  bottomTabIcon: {
    height: 28,
    width: 28,
  },
});
