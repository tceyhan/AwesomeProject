/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./pages/navigations/AuthNavigation";
import StackNavigation from "./pages/navigations/StackNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Router = () => {
  const [user, setUser] = useState();

  //! hafızaki user
  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@USER");
      return jsonValue != null ? setUser(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

  return (
    <NavigationContainer>
      {user ? <StackNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Router;
