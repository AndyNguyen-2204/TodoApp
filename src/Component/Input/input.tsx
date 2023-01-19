import React from 'react'
import {Text, TextInput, TouchableOpacity, View} from "react-native"
import {TypeInput} from "./interface"
  const Input :React.FC <TypeInput>=({
    placeholder,
    classesInput,
    onChange
  })=>{
    return(
      <TextInput style={classesInput} placeholder={placeholder} />
    )
  }
 
  export default Input
