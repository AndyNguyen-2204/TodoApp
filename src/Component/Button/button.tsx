import React from 'react'
import {Text, TouchableOpacity, View} from "react-native"
import {TypeButton} from "./interface"
  const Button :React.FC <TypeButton>=({
    title,
    classesButton,
    classLable,
    onpress
  })=>{
    return(
      <TouchableOpacity style={classesButton} onPress={()=>onpress()}>
        <Text style={classLable}>{title}</Text>
      </TouchableOpacity>
    )
  }
 
  export default Button
