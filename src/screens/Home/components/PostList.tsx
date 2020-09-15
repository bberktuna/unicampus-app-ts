import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Title, Caption, Paragraph, Text } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

interface Props {}

const PostList: React.FC<Props> = ({ navigation, text, user }: any) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={[styles.outBorder, { borderBottomColor: colors.text }]}>
        <View style={styles.leftSide}>
          <Image
            source={require("../../../../assets/brian.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.rightSide}>
          <View style={styles.topSide}>
            <View style={styles.topSideLeft}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {user.email}
              </Paragraph>

              <Caption style={styles.caption}> {user.username} </Caption>
              <View style={styles.topSideRight}>
                <Image
                  source={require("../../../../assets/icons/downarrow.png")}
                  style={[styles.iconStyle, { tintColor: colors.text }]}
                />
              </View>
            </View>
          </View>
          <View style={styles.middleSide}>
            <Text style={{ fontSize: 16 }}>{text}</Text>
          </View>
          <View style={styles.bottomSide}>
            <TouchableOpacity
              onPress={() => console.log("COOMENT pressed")}
              style={styles.iconOpacity}
            >
              <Image
                source={require("../../../../assets/icons/mention-outline.png")}
                style={[
                  styles.iconStyle,
                  { tintColor: colors.text, marginLeft: 0 },
                ]}
              />
              <Caption style={styles.iconCaption}>311</Caption>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("SHARE pressed")}
              style={styles.iconOpacity}
            >
              <Image
                source={require("../../../../assets/icons/share-outline.png")}
                style={[styles.iconStyle, { tintColor: colors.text }]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("HEART pressed")}
              style={styles.iconOpacity}
            >
              <Image
                source={require("../../../../assets/icons/heart-outline.png")}
                style={[
                  styles.iconStyle,
                  { tintColor: colors.text, marginLeft: 35 },
                ]}
              />
              <Caption style={styles.iconCaption}>311</Caption>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("DISLIKE pressed")}
              style={styles.iconOpacity}
            >
              <Image
                source={require("../../../../assets/icons/dislike2-outline.png")}
                style={[styles.iconStyle, { tintColor: colors.text }]}
              />
              <Caption style={styles.iconCaption}>311</Caption>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export { PostList };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-start",
  },
  outBorder: {
    borderBottomWidth: 0.5,
    width: "100%",
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  leftSide: {
    flex: 15,
    borderWidth: 1,
    alignItems: "flex-start",
    margin: 10,
    alignSelf: "flex-start",
  },
  rightSide: {
    flex: 85,
    margin: 10,
    alignSelf: "flex-start",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  iconCaption: {
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 5,
  },
  topSide: {
    flex: 1,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  topSideLeft: {
    flexDirection: "row",
    flex: 90,
  },
  topSideRight: {
    flex: 10,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  bottomSide: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  middleSide: {
    borderWidth: 1,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  iconStyle: {
    width: 24,
    height: 24,
    justifyContent: "center",
    marginLeft: 25,
  },
  iconOpacity: {
    flexDirection: "row",
  },
});
