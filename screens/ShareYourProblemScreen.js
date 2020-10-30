import * as React from 'react';
import {TouchableOpacity, Text, View, TextInput, StyleSheet, FlatList, Image} from 'react-native';
import {Badge, Icon, Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import {RFValue} from 'react-native-responsive-fontsize';
import { Dropdown } from 'react-native-material-dropdown';

export default class ShareYourProblemScreen extends React.Component {
constructor(){
    super()
    this.state = {
        userName : '',
        subject : '',
        userProblem : '',
    }
}

submitProblem=(userName,subject,userProblem)=>{

}

    render(){
        return(
            <View style = {styles.container}>
                 <Header 
                backgroundColor = {"#00adb5"}
                containerStyle = {styles.header}
                centerComponent = {{
                    text:"Share Your Problem",
                    style : {flex:1,color:"#fff",fontWeight:'bold', fontStyle:'italic', fontSize:RFValue(30)}
                }}
                />
                <TextInput 
                style = {styles.inputBox}
                placeholder = {"Your Name*"}
                placeholderTextColor = {'black'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {false}
                autoCapitalize = {'none'}
                onChangeText={(text)=>{
                    this.setState({
                        userName:text
                    })
                }}
                />
                <TextInput 
                style = {styles.inputBox}
                placeholder = {"Subject*"}
                placeholderTextColor = {'black'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {true}
                autoCapitalize = {'sentences'}
                onChangeText={(text)=>{
                    this.setState({
                        subject:text
                    })
                }}
                />
                <TextInput 
                style = {styles.inputBox2}
                placeholder = {"Your Problem*"}
                placeholderTextColor = {'black'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {true}
                multiline = {true}
                autoCapitalize = {'sentences'}
                onChangeText={(text)=>{
                    this.setState({
                        userProblem:text
                    })
                }}
                />
                <TouchableOpacity 
                style = {styles.button}
                onPress={()=>{
                    this.submitProblem()
                }}>
                    <Text style = {styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#222831",
        alignItems:'center',
    },
    button : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
    },
    buttonText:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(20),
        fontStyle:'italic',
        alignItems:'center',
    },
    inputBox:{
        backgroundColor : '#00adb5',
        borderColor:'#eeeeee',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width:RFValue(300),
        height:RFValue(50),
        marginTop:RFValue(20),
    },
    inputBox2:{
        backgroundColor : '#00adb5',
        borderColor:'#eeeeee',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width:RFValue(300),
        height:RFValue(150),
        marginTop:RFValue(20),
    },
    header : {
        marginTop:-15,
        flex:0.1,
        width:RFValue(500)
    },
})