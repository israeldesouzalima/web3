import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.myText}> Hello, App </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  myText: {
    fontSize: 22,
  },
});
