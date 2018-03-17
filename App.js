import React from "react"
import { StyleSheet, Text, View, Slider } from "react-native"
import AddEntry from "./components/AddEntry"
import UdaciSlider from "./components/UdaciSlider"
import UdaciStpper from "./components/UdaciStepper"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import devToolsEnhancer from 'remote-redux-devtools'

export default class App extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <Provider store={createStore(reducer,devToolsEnhancer())}>
        <View style={styles.container}>
          <AddEntry />
        </View>
      </Provider>
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
