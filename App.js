import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import {RFValue} from 'react-native-responsive-fontsize'
import ForumScreen from './screens/ForumScreen';
import ShareYourProblemScreen from './screens/ShareYourProblemScreen';

export default class App extends React.Component { 
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.text}></Text>
        <AppContainer />
      </View>
    )
  }
}

const AppNavigator = createSwitchNavigator({
  SignIn : {screen : SignInScreen},
  SignUp : {screen : SignUpScreen},
  Forum : {screen : ForumScreen},
  ShareYourProblem : {screen : ShareYourProblemScreen}
})

const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent :'center',
    alignItems:'center'
  },
  text:{
    fontSize:RFValue(20),
    fontWeight:'bold',
    fontStyle :'italic',
  }
})