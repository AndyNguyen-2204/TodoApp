import { ListTodos } from "./interface"
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import Dropdown from "../../src/Component/Dropdown/dropDown"
import { dataFilter } from "../TodoAddnew/dataStatusTodo"
import { useState, useMemo, useLayoutEffect, useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { styles } from "./style"
import {renderStatusTodo,renderColorStatus} from "./helperFunction"
import { Searchbar } from 'react-native-paper';
import Button from "../../src/Component/Button/button"
import { completedTodo,deleteTodo } from "../../Redux/ListTodoSlice/listTodo"
import ImageBackgroundScreen from "../../src/Component/BackgroundScreen"
import  Icon  from "react-native-vector-icons/FontAwesome"
import Modal from "../../src/Component/Modal/modal"
const ListTodo: React.FC<ListTodos> = ({
  navigation
}) => {
  const listTodoSlice = useSelector((state: any) => state.TodoList.data)
  const dispatch = useDispatch()
  const [checkboxTodo, setCheckboxTodo] = useState<string[]>([])
  const [searchvalue, setSearchValue] = useState<string>('');
  const [value, setValue] = useState(0);
  const [name, setName] = useState("")
  const [listTodo,setListTodo]=useState<any>()
  const onChangeSearch = (text:string)=>{
      setSearchValue(text)
  }
  const handleCheckTodo = (e: any) => {
    if (checkboxTodo.includes(e.name as never)) {
      setCheckboxTodo(checkboxTodo.filter((el: any) => el !== e.name))
    } else {
      setCheckboxTodo([...checkboxTodo, e.name])
    }
  }
  const handelCompletedTodo=()=>{
    dispatch(completedTodo(checkboxTodo))
    setCheckboxTodo([])
  }
  const handelDeleteTodo=()=>{
    dispatch(deleteTodo(checkboxTodo))
    setCheckboxTodo([])
  }
  const renderTodo = useMemo(() => {
    if (listTodo?.length > 0) {
      return (
        listTodo.map((e: any, index: number) =>
          <View key={index} style={styles.wrapTodoinner}>
            <TouchableOpacity onPress={() => handleCheckTodo(e)} style={styles.checkbox}>
              <Text style={styles.checked}>{checkboxTodo.includes(e.name) ? <Icon name='check' size={17} color="#ffffff"/> : ""}</Text>
            </TouchableOpacity>
            <View style={styles.wrapContent}>
              <Text style={styles.nameTodo}>
                Công việc : {e.name}
              </Text>
              <Text style={styles.nameTodo}>
                Trạng thái : <Text style={e.status==="Completed"?styles.type5:renderColorStatus(e.value)}>
                  {e.status === "Completed" ? "Hoàn thành" : renderStatusTodo(e.value)}</Text>
              </Text>
            </View>
          </View>
        )
      )
    } else {
      return null
    }
  }, [listTodo, checkboxTodo])

  useLayoutEffect(()=>{
    setListTodo(listTodoSlice)
    setValue(0)
    setName("")
  },[listTodoSlice])

  useEffect(()=>{
     if(value !== 0 ){
       if(value === 1){
        setListTodo(listTodoSlice.filter((e:any)=> e.value === 1 && e.status === "Processing"))
       }else if(value === 2){
        setListTodo(listTodoSlice.filter((e:any)=> e.value === 2 && e.status === "Processing"))
       }else if(value === 3){
        setListTodo(listTodoSlice.filter((e:any)=> e.value === 3 && e.status === "Processing"))
       }else if(value === 4){
        setListTodo(listTodoSlice.filter((e:any)=> e.value === 4 && e.status === "Processing"))
       }if(value === 5){
        setListTodo(listTodoSlice.filter((e:any)=> e.status === "Completed"))
       }if(value === 6){
        setListTodo(listTodoSlice)
       }
       
     }
  },[value])
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.wrapListTodoScreen}>
       <ImageBackgroundScreen />
      <Text style={styles.titleScreen}>Danh sách công việc cần làm</Text>
      <Dropdown label="Lọc" data={dataFilter} value={value} setName={setName} name={name} setValue={setValue} classDropdown={styles.dropdown} classWrapvalueDropdown={styles.wrapValueDropdown} />
      {listTodo?.length > 0 ? <>
      <ScrollView >
        <View style={styles.wrapTodo}>
          {renderTodo}
        </View>
        <View style={styles.wrapButton}>
        <Button title="Completed" classesButton={styles.buttonCompleted} classLable={styles.lablebtnComplete} onpress={handelCompletedTodo}/>
        <Button title="Delete" classesButton={styles.buttonDelete} classLable={styles.lablebtnDelete} onpress={handelDeleteTodo}/>
        </View>
      </ScrollView>
      </>:<>
      <View style={styles.wrapContentNullTodo}>
        <Text style={styles.nameNullTodo}>
          Bạn chưa thêm công việc cần làm nào vui lòng thêm công việc cần làm
        </Text>
        <Button title='Thêm công việc mới' classesButton={styles.button} classLable={styles.lableButton} onpress={() => { navigation.navigate("Add new") }} />
      </View>
      </>}
    </SafeAreaView>
    <Modal/>
    </SafeAreaView>
  )
}

export default ListTodo