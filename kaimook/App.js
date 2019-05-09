import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from "expo";
import { Image, Platform } from "react-native";
import { TabNavigator } from "react-navigation";
import { PeopleScreen } from "./PeopleScreen";
import { DecisionScreen } from "./DecisionScreen";
import { RestaurantsScreen } from "./RestaurantsScreen";


console.log("-----------------------------------------------------------");

const tabs = TabNavigator({
  PeopleScreen: {
    screen: PeopleScreen,
    navigationOptions: {
      tabBarLabel: "People",
      tabBarIcon: ({ tintColor }) => (
        <Image source={require("./images/people.png")}
          style={{ width: 32, height: 32, tintColor: tintColor }}
        />
      )
    }
  },
  DecisionScreen: {
    screen: DecisionScreen,
    navigationOptions: {
      tabBarLabel: "Decision",
      tabBarIcon: ({ tintColor }) => (
        <Image source={require("./images/decision.png")}
          style={{ width: 32, height: 32, tintColor: tintColor }}
        />
      )
    }
  },
  RestaurantsScreen: {
    screen: RestaurantsScreen,
    navigationOptions: {
      tabBarLabel: "Restaurants",
      tabBarIcon: ({ tintColor }) => (
        <Image source={require("./images/restaurants.png")}
          style={{ width: 32, height: 32, tintColor: tintColor }}
        />
      )
    }
  },

  initialRouteName: "DecisionScreen",
  animationEnabled: true, swipeEnabled: true,
  backBehavior: "none", lazy: true,
  tabBarPosition: platformOS === "android" ? "top" : "bottom",
  tabBarOptions: {
    activeTintColor: "#ff0000", showIcon: true,
    style: { paddingTop: platformOS === "android" ? Constants.statusBarHeight : 0 }
  }




});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on Mook:) app!</Text>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
