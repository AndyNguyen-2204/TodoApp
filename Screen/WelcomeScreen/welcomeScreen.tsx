import React from 'react';
import {SafeAreaView, StyleSheet, Text, View,Image, Dimensions, TouchableOpacity} from "react-native"
import Button from "../../src/Component/Button/button"
import {styles} from './style'
import { NavigationContainer } from '@react-navigation/native';
import ImageBackgroundScreen from '../../src/Component/BackgroundScreen/index';
import Icon from 'react-native-vector-icons/FontAwesome'
function WelcomeScreen({navigation}:any): JSX.Element {
  return (
    <SafeAreaView style={styles.wrapWelcome}>
     <ImageBackgroundScreen/>
      <View style={styles.circel}>
      </View>
      <View style={styles.wrapcontent}>
      <View style={styles.imgMan}>
        <Image  source={require('../../Asset/Images/imgHome.png')}/>
      </View>
        <Text style={styles.content}>Get things done with Todo</Text>
        <Text style={styles.description}>Plan, organize, track, in one visual, collaborative space</Text>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen