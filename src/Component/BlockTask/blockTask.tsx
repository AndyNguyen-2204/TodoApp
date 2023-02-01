import React from 'react'
import { View,Text,SafeAreaView,TouchableOpacity, StyleSheet } from 'react-native'
import {BlockTask} from "./interface"
 const BlockTaskk:React.FC<BlockTask>=({
  title,
  styleBLock,
  quantity
 })=>{
  return (
    <TouchableOpacity style={styleBLock}>
    <Text style={styles.content}>{title}</Text>
    <Text style={[styles.content, styles.number]}>{quantity} task</Text>
  </TouchableOpacity>
  )
}
export default BlockTaskk
const styles=StyleSheet.create({
    content:{
      fontFamily: 'Work Sans',
      fontSize:14,
      fontWeight:"700",
      textAlign:"center"
    },
    number:{
      fontSize:20,
      marginTop:5
    },
})
