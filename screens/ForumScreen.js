import * as React from 'react';
import {TouchableOpacity, Text, View, TextInput, StyleSheet, FlatList, Image} from 'react-native';
import {Badge, Icon, Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import {RFValue} from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';
var logo = require("../assets/shareYourProblem.png")
var logo2 = require("../assets/drivingLicense.png")
var logo3 = require("../assets/panCard.png")

export default class ForumScreen extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Header 
                backgroundColor = {"#00adb5"}
                containerStyle = {styles.header}
                centerComponent = {{
                    text:"Forum",
                    style : {flex:1,color:"#fff",fontWeight:'bold', fontStyle:'italic', fontSize:RFValue(30)}
                }}
                />
                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=>{
                    this.props.navigation.navigate("ShareYourProblem")
                }}>
                <Image 
                source = {logo}
                style = {styles.shareYourProblemImage}/>
                <Text style = {styles.buttonText}>Share your problem</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.button}
                onPress={()=>{

                }}>
                    <Text style = {styles.buttonText}>Driving License</Text>
                    <Image 
                    source = {logo2}
                    style = {styles.drivingLicenseImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                style ={styles.button}
                onPress={()=>{

                }}>
                    <Image
                    source = {logo3}
                    style = {styles.panCardImage}
                    />
                    <Text style = {styles.buttonText}>Pan Card</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>C</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.button}
                onPress = {()=>{

                }}>
                    <Text style = {styles.buttonText}>Others</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.button}
                onPress={()=>{
                    this.props.navigation.navigate("SignIn")
                }}>
                    <Text style = {styles.buttonText}>Logout</Text>
                    <SimpleLineIcons name="logout" size={50} color="black" />
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
    header : {
        marginTop:-15,
        flex:0.2,
        width:RFValue(500)
    },
    shareYourProblemImage:{
        width:RFValue(50),
        height:RFValue(60),
    },
    drivingLicenseImage : {
        width:RFValue(150),
        height:RFValue(100),
    },
    panCardImage : {
        width:RFValue(100),
        height:RFValue(70),
    }
})