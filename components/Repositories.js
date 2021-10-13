import React from "react";
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
import WebView from "./WebViews";

function Repositories({ navigation, route }) {
  const [repoState, setRepoState] = React.useState({
    list: [],
    loading: true,
    error: false,
  });

  React.useEffect(() => {
    fetchRepo();
  }, []);

  const userData = route.params.userData;
  const fetchRepo = async () => {
    const response = await fetch(userData.repos_url, {
      method: "get",
    })
      .then((response) => response.json())
      .then((result) => {
        setTimeout(() => {
          setRepoState({
            ...repoState,
            list: result,
            loading: false,
            error: false,
          });
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          setRepoState({ ...repoState, error: true, loading: false });
        }, 2000);
      });
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
}

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
