import React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  ActivityIndicator,
  TextInput,
  View,
  Text,
  Button,
} from "react-native";
import {
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Search = () => {
  const [searchState, setSearchState] = useState({
    username: "",
    loading: false,
    error: false,
  });
  const navigation = useNavigation();

  const fetchUser = async () => {
    setSearchState({ ...searchState, loading: true });
    const response = await fetch(
      `https://api.github.com/users/${searchState.username}`,
      {
        method: "get",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "Not Found") {
          setTimeout(() => {
            setSearchState({ ...searchState, loading: false, error: true });
          }, 1000);
        } else {
          setTimeout(() => {
            setSearchState({ ...searchState, loading: false, error: false });

            navigation.navigate("Dashboard", { result });
          }, 1000);
        }
      });
  };

  const inputChange = (text) => {
    setSearchState({ ...searchState, username: text });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView extraScrollHeight={40}>
        <View style={{ marginTop: 155 }}>
          <Text style={styles.title}>Search for a GitHub user</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="GitHub username"
            autoFocus={true}
            autoCapitalize="none"
            value={searchState.username}
            onChangeText={(text) => inputChange(text.toLowerCase())}
          />
          <View style={styles.button}>
            <Button
              style={styles.buttonText}
              title="Search"
              onPress={fetchUser}
            />
          </View>

          {searchState.loading && (
            <ActivityIndicator size="large" color="#0000ff" />
          )}

          {searchState.error && (
            <Text style={styles.error}>User Not Found</Text>
          )}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48BBEC",
    justifyContent: "center",
    padding: 30,
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
  searchInput: {
    height: 50,
    padding: 5,
    marginRight: 5,
    fontSize: 22,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    color: "white",
  },
  buttonText: {
    fontSize: 20,
    color: "#111",
    alignSelf: "center",
  },
  button: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  error: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
export default Search;
