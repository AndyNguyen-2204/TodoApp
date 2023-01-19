import React from 'react'
import { Image, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function ImageBackgroundScreen() {
  return (
    <View style={styles.image}>
    <Image  source={require('../../../Asset/Images/imgbg.png')}/>
  </View>
  )
}
const styles = StyleSheet.create({
  image:{
    zIndex:2,
    position:"absolute",
    top:0,
    left:0,
    
  },
});