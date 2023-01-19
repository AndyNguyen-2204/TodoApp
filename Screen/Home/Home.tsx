import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {styles} from "./styles"
import Button from '../../src/Component/Button/button'
import {TypeHomeScreen} from "./interface"
 const Home:React.FC <TypeHomeScreen>=({
    navigation
  })=>{
  return (
    <SafeAreaView style={styles.wrapHomeScreen}>
     <View style={styles.wrapAllcontent}>
     <TouchableOpacity style={[styles.wrapbox,styles.firstBox]}>
       <Text style={styles.content}>Quan trọng và khẩn cấp</Text>
       <Text style={[styles.content,styles.number]}>5</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.wrapbox,styles.secondBox]}>
       <Text style={styles.content}>Quan trọng nhưng không khẩn cấp</Text>
       <Text style={[styles.content,styles.number]}>5</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.wrapbox,styles.thirdBox]}>
       <Text style={styles.content}>Khẩn cấp nhưng không quan trọng</Text>
       <Text style={[styles.content,styles.number]}>5</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.wrapbox,styles.fourthBox]}>
       <Text style={styles.content}>Không khẩn cấp và không quan trọng</Text>
       <Text style={[styles.content,styles.number]}>5</Text>
     </TouchableOpacity>
     </View>
     <Button title='Thêm công việc mới' classesButton={styles.button} classLable={styles.lableButton} onpress={()=>{navigation.navigate("Add new")}} />
    </SafeAreaView>
   )
}

export default Home
