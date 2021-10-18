import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import Badge from "components/Badge";
import Separator from "components/Separator";
//import WebView from "./WebViews";
import GlobalContext from "./GlobalContext";

function Repositories({ navigation, route }) {
  const context = React.useContext(GlobalContext);
  const user = context.user;
  const [repoState, setRepoState] = React.useState({
    list: [],
    loading: true,
    error: false,
  });

  React.useEffect(() => {
    fetchRepo();
  }, []);
}

const userData = route.params.userData;
const fetchRepo = async () => {
  if (context.repos.length === 0) {
    const rawResponse = await fetch(use.repos_url);
    const jsonResponse = await rawResponse.json();
    context.setRepos(jsonResponse);
    storeData(STORAGE.KEY + user.login, {
      user: context.user,
      repos: jsonResponse,
    });
  } else {
    console.log(context.repos);
  }
  useEffect(() => {
    fetchRepos();
  }, []);
  const goToRepo = () => {
    navigate("WebView", { url });
  };
  return (
    <View style={styles.container}>
      <Badge
        userInfo={{
          avatar_url: userData.avatar_url,
          name: userData.name,
          login: userData.login,
        }}
      />
      {repoState.error && <Text style={styles.error}>Error</Text>}
      {repoState.loading && <ActivityIndicator size="large" color="#0000ff" />}
      <ScrollView>
        {repoState.list.map((repo, index) => {
          return (
            <View style={styles.rowContainer} key={index}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("WebView", { url: repo.html_url })
                }
              >
                <Text style={styles.name}>{repo.name}</Text>
              </TouchableOpacity>
              <Text style={styles.description}>{repo.description}</Text>

              <View>
                <Separator />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "column",
    flex: 1,
    padding: 10,
  },
  name: {
    color: "#48BBEC",
    fontSize: 18,
    paddingBottom: 5,
  },
  stars: {
    color: "#48BBEC",
    fontSize: 14,
    paddingBottom: 5,
  },
  description: {
    fontSize: 14,
    paddingBottom: 5,
  },
  error: {
    fontSize: 20,
    textAlign: "center",
    color: "red",
  },
});

export default Repositories;
