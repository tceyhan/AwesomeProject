/* eslint-disable prettier/prettier */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./pages/navigations/AuthNavigation";

import * as Linking from 'expo-linking';
import { Text } from "react-native";

// const prefix = Linking.createURL('/');

const Router = () => {

  // const linking = {
  //   prefixes: [prefix],
  // };
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default Router;
