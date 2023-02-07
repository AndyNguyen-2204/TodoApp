import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { TypeInput } from "./interface"
const Input: React.FC<TypeInput> = ({
  placeholder,
  classesInput,
  onChange,
  value,
  placeholderTextColor,
  multiline,
  numberOfLines
}) => {
  return (
    <TextInput 
    style={classesInput} placeholder={placeholder} 
    placeholderTextColor={placeholderTextColor}
    value={value}
    numberOfLines={numberOfLines}
    multiline={multiline} 
    onChangeText={(text) => onChange(text)} 
    />
  )
}

export default Input
