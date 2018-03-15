import React from "react"
import { StyleSheet, Text, View } from "react-native"
import AddEntry from "./components/AddEntry"
import UdaciSlider from "./components/UdaciSlider"
import UdaciStpper from "./components/UdaciStepper"
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
