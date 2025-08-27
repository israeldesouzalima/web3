import React, { Component } from "react";
import * as Location from "expo-location";
import { Text, View, StyleSheet } from "react-native";

export default class App extends Component {
  state = {
    places: [{ errorMessage: null, loaded: false, location: null }],
  };

  componentDidMount() {
    this._getLocation();
  }

  _getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      this.setState({ errorMessage: "Permissão ao GPS negada!", loaded: true });
    } else {
      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      this.setState({ location, loaded: true, errorMessage: null });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.myText}> Hello, friends!! </Text>
        <Text style={styles.myText}> Hello, friends!! </Text>
        <Text style={styles.myText}> Hello, friends!! </Text>
        <Text style={styles.myText}> Hello, friends!! </Text>
        <Text style={styles.myText}> Hello, friends!! </Text>
        <Text style={styles.myText}> Hello, friends!! </Text>
        <Text style={styles.myText}> Hello, friends!! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  myText: {
    fontSize: 23,
  },
});
