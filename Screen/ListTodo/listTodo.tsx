import { ListTodos } from "./interface"
import { View,Text,SafeAreaView, StyleSheet,TouchableOpacity } from "react-native"
import Dropdown from "../../src/Component/Dropdown/dropDown"
import {data} from "../TodoAddnew/dataStatusTodo"
import {useState} from "react"
const ListTodo:React.FC<ListTodos>=({
  
})=>{
  const handleCheckTodo =()=>{

  }
  return(
      <SafeAreaView style={styles.wrapListTodoScreen}>
        <Text style={styles.titleScreen}>Danh sách công việc cần làm</Text>
        <View >
          <View style={styles.wrapTodo}>
             <View style={styles.wrapTodoinner}>
            <TouchableOpacity style={styles.checkbox}>
                <Text style={styles.checked}>X</Text>
            </TouchableOpacity>

            <View style={styles.wrapContent}>
            <Text style={styles.nameTodo}>
              Công việc : Dắt chó đi dạo
            </Text>
            <Text style={styles.nameTodo}>
              Trạng thái : Khẩn cấp nhưng không quan trọng
            </Text>
            </View>
             </View>
          </View>
        </View>
      </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  wrapListTodoScreen:{
   backgroundColor:"#000000",
   height:"100%",
   width:"100%",
   paddingHorizontal:15
  },
  titleScreen:{
   fontSize:25,
   color:"#ffffff",
   alignSelf:"center",
   fontWeight:"600",
   marginTop:20
  },
  wrapTodo:{
    backgroundColor:"#363636",
    borderRadius:10,
    marginTop:10
  },
  wrapTodoinner:{
    flexDirection:"row",
    gap:20,
    paddingVertical:17,
    paddingHorizontal:10,
  },
  wrapContent:{
    width:"100%"
  },
  checkbox:{
    height:30,
    width:30,
    borderColor:"#ffffff",
    borderWidth:1
  },
  checked:{
    fontSize:18,
    color:"#ffffff",
    alignSelf:"center",
  },
  nameTodo:{
    fontSize:17,
    color:"#ffffff",
    width:"90%"
    
  }
})
export default ListTodo