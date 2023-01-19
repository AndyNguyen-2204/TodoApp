import { Image, SafeAreaView, StyleSheet, TextInput, View } from "react-native"
import React from 'react'
import ImageBackgroundScreen from "../../src/Component/BackgroundScreen"
import Input from "../../src/Component/Input/input"
import Dropdown from '../../src/Component/Dropdown/dropDown';
 function TodoAdd():JSX.Element{
  return(
   <SafeAreaView style={styles.wrapAddScreen}>
    <ImageBackgroundScreen/>
    <View>
      <Image  style={styles.image} source={require("../../Asset/Images/imgAddScr.png")}/>
       <Input placeholder="Nhập công việc mới" classesInput={styles.textInput} ></Input>
       <Dropdown label=""/>
    </View>
   </SafeAreaView>
  )
 }
 const styles=StyleSheet.create({
  wrapAddScreen:{
    paddingHorizontal:15,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    height:"100%",
    width:"100%",
    backgroundColor:"#F5F5F5"
  },
  image:{
    alignSelf:"center",
    width:150
  },
  textInput:{
    backgroundColor:"#ffffff",
    width:300,
    height:43,
    borderRadius:11,
    paddingHorizontal:10,
    color:"#000000",
    fontWeight:"500",
    fontFamily:"Poppins",
    fontSize:13,
    lineHeight:20,
    marginTop:15

  }
 })
 export default TodoAdd