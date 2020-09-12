import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

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

const Bottom = createMaterialBottomTabNavigator();

const headerOff = () => ({
  headerShown: false,
});

function BottomNav() {
  return (
    <React.Fragment>
      <Bottom.Navigator
        labeled={false}
        barStyle={{
          backgroundColor: "#fff",
        }}
      >
        <Bottom.Screen
          name="_FeedStack"
          component={_FeedStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={26} color="black" />
            ),
          }}
        />

        <Bottom.Screen
          name="_SearchStack"
          component={_SearchStack}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={26} color="black" />
            ),
          }}
        />

        <Bottom.Screen
          name="_NotificationsStack"
          component={_NotificationsStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="md-notifications-outline"
                size={26}
                color="black"
              />
            ),
          }}
        />

        <Bottom.Screen
          name="_MessagesStack"
          component={_MessagesStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-chatboxes" size={26} color="black" />
            ),
          }}
        />
      </Bottom.Navigator>
    </React.Fragment>
  );
}

const headerOptions = ({ navigation }: any) => ({
  /*headerStyle: {
    backgroundColor: "black",
  },
  headerTitleStyle: {
    color: "white",
  },*/
  HeaderTitle: "Home",

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

const _FeedStack = () => (
  <PostsStack.Navigator initialRouteName="Posts">
    <PostsStack.Screen name="Posts" component={Posts} options={headerOptions} />
    <PostsStack.Screen name="PostDetail" component={PostDetail} />
    <PostsStack.Screen name="CreatePost" component={CreatePost} />
  </PostsStack.Navigator>
);

const _SearchStack = () => (
  <SearchStack.Navigator initialRouteName="Search">
    <SearchStack.Screen
      name="Search"
      component={Search}
      options={headerOptions}
    />
  </SearchStack.Navigator>
);

const _NotificationsStack = () => (
  <NotificationsStack.Navigator initialRouteName="Notifications">
    <NotificationsStack.Screen
      name="Notifications"
      component={Notifications}
      options={headerOptions}
    />
    <NotificationsStack.Screen name="CreatePost" component={CreatePost} />
  </NotificationsStack.Navigator>
);

const _MessagesStack = () => (
  <MessagesStack.Navigator initialRouteName="Messages">
    <MessagesStack.Screen
      name="Messages"
      component={Messages}
      options={headerOptions}
    />
    <MessagesStack.Screen name="CreateMessage" component={CreateMessage} />
  </MessagesStack.Navigator>
);

export { BottomNav };

const styles = StyleSheet.create({
  headerLeftAvatar: {
    marginLeft: 10,
  },
  headerRightAvatar: {
    marginRight: 10,
  },
});
