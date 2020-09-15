import React from "react";
import { DrawerContent } from "../../src/navigation/DrawerContent";
import { BottomNav } from "../navigation/BottomNav";

//navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

//screens
import { Profile, Logout, Bookmarks, Settings } from "../../src/screens";

const Drawer = createDrawerNavigator();

export function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomNav" component={BottomNav} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Bookmarks" component={Bookmarks} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
