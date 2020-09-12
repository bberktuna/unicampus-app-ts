import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

interface Props {
  icon: any;
  onPressFab: any;
}

const CustomFAB: React.FC<Props> = ({ icon, onPressFab }) => (
  <FAB
    style={{ backgroundColor: "white" }}
    icon={icon}
    color="black"
    onPress={() => onPressFab()}
  />
);

export { CustomFAB };
