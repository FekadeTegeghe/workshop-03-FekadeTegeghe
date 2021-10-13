import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import {
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";

const Dashboard = ({ route: { params } }) => {
  const userData = params.result;
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.profilePicBox}>
        <Image
          source={{
            uri: userData.avatar_url,
          }}
          style={styles.image}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.blue,
          { height: 85, justifyContent: "center", alignItems: "center" },
        ]}
        onPress={() => navigation.navigate("ProfileDetails", { userData })}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.pink,
          { height: 85, justifyContent: "center", alignItems: "center" },
        ]}
        onPress={() => navigation.navigate("Repositories", { userData })}
      >
        <Text style={styles.buttonText}>Repositories</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.purple,
          { height: 85, justifyContent: "center", alignItems: "center" },
        ]}
        onPress={() => navigation.navigate("Notes", { userData })}
      >
        <Text style={styles.buttonText}>Notes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 0,
  },
  profilePicBox: {
    flex: 2,
  },
  image: {
    height: 350,
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 26,
  },
  blue: {
    backgroundColor: "powderblue",
  },
  purple: {
    backgroundColor: "violet",
  },
  pink: {
    backgroundColor: "pink",
  },
});
export default Dashboard;
