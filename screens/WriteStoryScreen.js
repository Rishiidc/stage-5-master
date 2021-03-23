import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {Header, Icon} from  'react-native-elements'
export default class WriteStory extends React.Component {
    constructor(){
        super()
        this.state = {
            title : '',
            author : '',
            story : ''
        }
    }
    render(){
        return(
            <View style = {{flex : 1}}>
                <Header
                centerComponent = {{text : "Write your story here", style : {color : "green"}}}
                rightComponent = {{icon : "home", color : "blue"}}/>
                 <View style = {styles.keyBoardStyle}>
                <TextInput style = {styles.formTextInput} placeholder = "title" onChangeText = {Text =>{this.setState({title : Text})}}/>
                <TextInput style = {styles.formTextInput} placeholder = "author" onChangeText = {Text =>{this.setState({author : Text})}}/>
                <TextInput style = {[styles.formTextInput, {height : 300}]} placeholder  = "story" multiline = {true} onChangeText = {Text =>{this.setState({story : Text})}}/>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor : 'green'
    },
    formTextInput:{
      width:"50%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )