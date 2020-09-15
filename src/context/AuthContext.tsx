import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signout":
      return { token: null };
  }
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
  };
};

export const AuthContext: any = React.createContext({} as any);

export const { Context, Provider } = createDataContext(
  authReducer,
  { signout },
  { token: null }
);
