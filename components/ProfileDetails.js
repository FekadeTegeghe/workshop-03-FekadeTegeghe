import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import Separator from "components/Separator";
import Badge from "components/Badge";

const ProfileDetails = ({ route: { params } }) => {
  const detailsArr = [
    "company",
    "location",
    "followers",
    "following",
    "email",
    "bio",
  ];
  const userData = params.userData;
  return (
    <View style={styles.container}>
      <Badge
        userInfo={{
          avatar_url: userData.avatar_url,
          name: userData.name,
          login: userData.login,
        }}
      />
      <ScrollView>
        {detailsArr.map((item, index) => {
          if (userData[item])
            return (
              <View style={styles.rowContainer} key={index}>
                <Text style={styles.rowTitle}>{item.toUpperCase()}</Text>

                <Text style={styles.rowContent}>{userData[item]}</Text>
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
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: "#48BBEC",
    fontSize: 16,
  },
  rowContent: {
    fontSize: 19,
  },
});
export default ProfileDetails;
