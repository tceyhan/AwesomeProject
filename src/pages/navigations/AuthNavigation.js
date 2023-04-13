import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "../Register/Register";
import Login from "../Login/Login";
import StackNavigation from "./StackNavigation";

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#c55" },
        headerTitleStyle: {
          color: "white",
          fontWeight: "bold",
          fontSize: 25,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
        }}
      />
      
         <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: "Register",
        }}
      />
      <Stack.Screen
        name="Stack"
        component={StackNavigation}
        options={{
          title: "StackNavigation",
        }}
      />
   
    </Stack.Navigator>
  );
};

export default AuthNavigation;
