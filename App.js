import "react-native-gesture-handler";

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  SafeAreaView,
  Button,
  Image,
} from "react-native";

import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackground,
} from "@react-navigation/stack";

import Dashboard from "./components/Dashboard";
import Notes from "./components/Notes";
import ProfileDetails from "./components/ProfileDetails";
import Repositories from "./components/Repositories";
import Search from "./components/Search";
import WebView from "react-native-webview";

const Container = NavigationContainer();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Container>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "Search" }}
        />
        <Stack.Screen
          name="ProfileDetails"
          component={ProfileDetails}
          options={{ title: "Profile Details" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={({ route }) => ({ title: route.params.result.name })}
        />

        <Stack.Screen name="Repositories" component={Repositories} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="WebView" component={WebView} />
      </Stack.Navigator>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "green",
    padding: 50,
    paddingTop: 50,
  },
});
