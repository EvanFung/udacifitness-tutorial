import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import UdaciSlider from "./UdaciSlider"
import UdaciSteppers from "./UdaciStepper"
import { getMetricMetaInfo, timeToString } from "../utils/helpers"
import DateHeader from "./DateHeader"
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}
export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  }
  increment = metric => {
    const { max, step } = getMetricMetaInfo(metric)
    this.setState(state => {
      const count = state[metric] + step
      return {
        ...state,
        [metric]: count > max ? max : count
      }
    })
  }
  decrement = metric => {
    this.setState(state => {
      const count = state[metric] - getMetricMetaInfo(metric).step

      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      }
    })
  }

  slider = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }))
  }
  submit = () => {
    const key = timeToString()
    const entry = this.state
    console.log(this.state)
    this.setState({
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0
    })
    //Update redux

    //Navigate to home

    //Save to 'DB'

    //Clean local notification
  }
  render() {
    const metaInfo = getMetricMetaInfo()

    return (
      <View>
        <DateHeader date={new Date().toLocaleDateString()} />
        <Text>{JSON.stringify(this.state)}</Text>
        {Object.keys(metaInfo).map(key => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              {type === "slider" ? (
                <UdaciSlider
                  value={value}
                  onChange={value => this.setState({ [key]: value })}
                  {...rest}
                />
              ) : (
                <UdaciSteppers
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
              )}
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit}/>
      </View>
    )
  }
}
