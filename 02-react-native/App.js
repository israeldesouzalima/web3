import React, { Component } from "react";
import * as Location from "expo-location";
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";

export default class App extends Component {
  state = {
    errorMessage: null,
    location: null,
    bobinho: {
      lgn: null,
    },
    locationAddress: null,
    street: null,
    subregion: null,
    region: null,
    country: null,
    postalCode: null,
    district: null,
  };

  componentDidMount() {
    this._getLocation();
  }

  _getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      this.setState({ errorMessage: "Permissão de localização negadaaaaa!" });
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        errorMessage: "Permissão de localização concedida!",
        location: location,
      });

      const { latitude, longitude } = location.coords;

      this.setState({
        bobinho: {
          ...this.state.bobinho,
          lgn: longitude,
        },
      });

      let locationAddress = await Location.reverseGeocodeAsync({
        latitude: latitude,
        longitude: longitude,
      });

      this.setState({ locationAddress });

      const address = locationAddress;

      const [{ street, subregion, region, country, postalCode, district }] =
        address;

      this.setState({
        street,
        subregion,
        region,
        country,
        postalCode,
        district,
      });
    }
  };

  render() {
    if (this.state.errorMessage === "Permissão de localização negadaaaaa!") {
      return (
        <View style={styles.container}>
          <Text>{JSON.stringify(this.state.errorMessage)}</Text>
        </View>
      );
    } else if (
      this.state.location &&
      this.state.location.coords &&
      typeof this.state.location.coords.latitude === "number" &&
      typeof this.state.location.coords.longitude === "number"
    ) {
      return (
        <View style={styles.container}>
          <MapView
            ref={(map) => (this.mapStyle = map)}
            region={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.0142,
              longitudeDelta: 0.0231,
            }}
            style={styles.mapStyle}
            showsBuildings={false}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text> Espere...</Text>
        </View>
      );
    }
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
    textAlign: "center",
  },
  mapStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

// return (
//   <View style={styles.container}>
//     <Text style={styles.myText}> Onde eu estou?? </Text>
//     {this.state.location && (
//       <Text style={styles.myText}>
//         Contemple o seu endereço por completo: {"\n"}
//         {this.state.street}
//         {"\n"}
//         {this.state.district}
//         {"\n"}
//         {this.state.subregion}
//         {"\n"}
//         {this.state.postalCode}
//         {"\n"}
//         {this.state.region}
//         {"\n"}
//         {this.state.country}
//         {"\n"}
//       </Text>
//     )}
//   </View>
// );
