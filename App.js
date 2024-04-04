import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./SignIn";
import Home from "./Home";
import Shifts from "./Shifts";
import Register from "./Register";
import Payroll from "./Payroll";
import "react-native-gesture-handler";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
     screenOptions={{
        drawerActiveBackgroundColor: 'rgba(128, 128, 128, 0.1)',
        drawerActiveTintColor: 'black',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Drawer.Screen name="Shifts" component={Shifts} />
      <Drawer.Screen name="Payroll" component={Payroll} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
